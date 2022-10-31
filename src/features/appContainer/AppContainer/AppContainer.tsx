import { ReactNode } from 'react'
import { Providers } from '@features/appContainer/Providers'
import { Layout } from '@features/appContainer/Layout'

interface AppContainerProps {
  children: ReactNode
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  )
}
