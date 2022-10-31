import { useMutation } from '@tanstack/react-query'
import { LoginUser } from '@api/types/LoginUser'
import { useContext } from 'react'
import { AxiosInstanceContext } from '@contexts/AxiosInstanceContext'

interface UseLoginUserProps {
  userData: LoginUser
}

export const useLoginUser = () => {
  const { axiosInstanceWithoutHandleError } = useContext(AxiosInstanceContext)
  return useMutation(({ userData }: UseLoginUserProps) => {
    return axiosInstanceWithoutHandleError.post(`/auth`, userData)
  })
}
