import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiUrl } from '@config/apiUrl'
import { User } from '@api/interfaces'

export const useFetchCurrentUser = () => {
  return useQuery([], () => {
    return axios
      .get<User>(`${apiUrl}users`, { withCredentials: true })
      .then((response) => response.data)
  })
}
