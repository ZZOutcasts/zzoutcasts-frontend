import { useMemo } from 'react'
import { User } from '@api/interfaces'

export const useFetchCurrentUser = () => {
  const userData = useMemo<User>(
    () => ({
      id: 'id',
      username: 'jeicaM',
      email: 'json.connor@wp.com',
      avatarUrl: '/avatar.png'
      // TODO: These should be generated on backend
    }),
    []
  )

  return userData
}
