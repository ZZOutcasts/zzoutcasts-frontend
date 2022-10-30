import { useMutation } from '@tanstack/react-query'
import { RegisterUser } from '@api/interfaces/RegisterUser'
import { useContext } from 'react'
import { AxiosInstanceContext } from '@contexts/AxiosInstanceContext'

interface UseRegisterUserProps {
  userData: RegisterUser
}

export const useRegisterUser = () => {
  const { axiosInstanceWithoutHandleError } = useContext(AxiosInstanceContext)
  return useMutation(({ userData }: UseRegisterUserProps) => {
    return axiosInstanceWithoutHandleError.post(`/users`, userData)
  })
}
