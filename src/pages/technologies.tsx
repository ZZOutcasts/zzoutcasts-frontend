import type { NextPage } from 'next'
import { TechnologiesList } from '@features/technologiesList'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Layout } from '@components/navigation/Layout'

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
