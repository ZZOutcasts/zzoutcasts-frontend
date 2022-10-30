import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { noAuthRoute } from '@features/auth/utils/noAuthRoute'
import { StatusCode } from '@utils/StatusCode'

export const useHandleForbidden = (error?: AxiosError) => {
  const router = useRouter()

  if (!error) return

  const statusCodesMeaningForbidden = [
    StatusCode.FORBIDDEN,
    StatusCode.UNAUTHORIZED
  ]

  const statusCode = Number(error.status)

  const isForbidden = statusCodesMeaningForbidden.includes(statusCode)

  if (isForbidden) router.push(noAuthRoute())
}
