import { useQuery } from '@tanstack/react-query'
import { User } from '@api/types'
import { useContext } from 'react'
import { AxiosInstanceContext } from '@contexts/AxiosInstanceContext'

export const useFetchCurrentUser = () => {
  const { axiosInstanceWithoutHandleError } = useContext(AxiosInstanceContext)

  return useQuery(
    [],
    () => {
      return axiosInstanceWithoutHandleError
        .get<User>(`/users`)
        .then((response) => response.data)
    },
    { retry: false, keepPreviousData: false }
  )
}
