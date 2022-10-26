import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { RegisterUser } from '@api/interfaces/RegisterUser'
import { apiUrl } from '@config/apiUrl'

interface UseRegisterUserProps {
  userData: RegisterUser
}

export const useRegisterUser = () => {
  return useMutation(({ userData }: UseRegisterUserProps) => {
    return axios.post(`${apiUrl}user`, { ...userData })
  })
}
