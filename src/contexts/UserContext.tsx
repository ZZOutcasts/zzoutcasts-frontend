import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { User } from '@api/types'
import { useFetchCurrentUser } from '@api/hooks'

interface UserContextProps {
  user?: User
  reloadUser: () => void
  isLoading: boolean
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
)

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const { data, isLoading, refetch, isError } = useFetchCurrentUser()

  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    if (isError) return setUser(undefined)
    setUser(data)
  }, [isError, data])

  const contextData = useMemo(
    () => ({
      user,
      reloadUser: refetch,
      isLoading
    }),
    [user, isLoading]
  )

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  )
}
