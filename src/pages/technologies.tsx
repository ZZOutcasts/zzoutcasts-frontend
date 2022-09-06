import type { NextPage } from 'next'
import { Layout } from '../features/common/components/navigation/Layout'
import { TechnologiesList } from '@features/technologiesList/index'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

const technologies: NextPage = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <TechnologiesList />
      </QueryClientProvider>
    </Layout>
  )
}
export default technologies
