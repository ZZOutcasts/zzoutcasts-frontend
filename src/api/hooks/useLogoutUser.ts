import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '@config/apiUrl'

export const useLogoutUser = () => {
  return useMutation(() => {
    return axios.delete(`${apiUrl}auth`, { withCredentials: true })
  })
}
