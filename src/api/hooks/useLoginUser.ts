import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { LoginUser } from '@api/interfaces/LoginUser'
import { apiUrl } from '@config/apiUrl'

interface UseLoginUserProps {
  userData: LoginUser
}

export const useLoginUser = () => {
  return useMutation(({ userData }: UseLoginUserProps) => {
    return axios.post(
      `${apiUrl}auth`,
      { ...userData },
      { withCredentials: true }
    )
  })
}
