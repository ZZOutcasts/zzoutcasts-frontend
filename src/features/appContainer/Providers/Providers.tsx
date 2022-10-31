import { ReactNode } from 'react'
import { ThemeProvider } from '@features/appContainer/ThemeProvider'
import { AxiosInstanceProvider } from '@contexts/AxiosInstanceContext'
import { UserProvider } from '@contexts/UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AxiosInstanceProvider>
          <UserProvider>{children}</UserProvider>
        </AxiosInstanceProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
