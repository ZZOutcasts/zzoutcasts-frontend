import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { AxiosInstanceContext } from '@contexts/AxiosInstanceContext'

export const useLogoutUser = () => {
  const { axiosInstanceWithHandleError } = useContext(AxiosInstanceContext)

  return useMutation(() => {
    return axiosInstanceWithHandleError.delete(`/auth`)
  })
}
