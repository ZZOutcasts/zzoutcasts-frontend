import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { Layout } from '@components/navigation/Layout'
import { UserProvider } from '@contexts/UserContext'
import { AxiosInstanceProvider } from '@contexts/AxiosInstanceContext'

const queryClient = new QueryClient()

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosInstanceProvider>
        <UserProvider>
          <Layout>{children}</Layout>
        </UserProvider>
      </AxiosInstanceProvider>
    </QueryClientProvider>
  )
}
