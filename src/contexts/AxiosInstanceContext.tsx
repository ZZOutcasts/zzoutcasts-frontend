import { createContext, ReactNode, useMemo } from 'react'
import axios, { AxiosError, AxiosInstance } from 'axios'
import { StatusCode } from '@utils/StatusCode'
import { useRouter } from 'next/router'

interface AxiosInstanceContextProps {
  axiosInstanceWithHandleError: AxiosInstance
  axiosInstanceWithoutHandleError: AxiosInstance
}

export const AxiosInstanceContext = createContext<AxiosInstanceContextProps>(
  {} as AxiosInstanceContextProps
)

interface AxiosInstanceProviderProps {
  children: ReactNode
}

export const AxiosInstanceProvider = ({
  children
}: AxiosInstanceProviderProps) => {
  const router = useRouter()

  const axiosInstanceConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
  }

  const axiosInstanceWithHandleError = axios.create(axiosInstanceConfig)
  const axiosInstanceWithoutHandleError = axios.create(axiosInstanceConfig)

  const axiosTelemetryInterceptor = (error: AxiosError) => {
    console.error('axios error', error)
    // TODO: add telemetry and other staff
    return Promise.reject(error)
  }

  const axiosHandleErrorInterceptor = (error: AxiosError) => {
    axiosTelemetryInterceptor(error)
    const errorCode = error.response?.status

    const errorCodesWithErrorPage = [
      StatusCode.UNAUTHORIZED,
      StatusCode.FORBIDDEN,
      StatusCode.NOT_FOUND
    ]

    if (errorCodesWithErrorPage.includes(errorCode as StatusCode)) {
      router.push(`/${errorCode}`)
    } else router.push(`/${StatusCode.INTERNAL}`)

    return Promise.reject(error)
  }

  axiosInstanceWithHandleError.interceptors.response.use(
    undefined,
    axiosHandleErrorInterceptor
  )

  axiosInstanceWithoutHandleError.interceptors.response.use(
    undefined,
    axiosTelemetryInterceptor
  )

  const value = useMemo(
    () => ({ axiosInstanceWithHandleError, axiosInstanceWithoutHandleError }),
    []
  )

  return (
    <AxiosInstanceContext.Provider value={value}>
      {children}
    </AxiosInstanceContext.Provider>
  )
}
