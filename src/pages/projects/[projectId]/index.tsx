import { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@components/navigation/Layout'
import { ProjectOverview } from '@features/projectOverview'

const queryClient = new QueryClient()
export const Project: NextPage = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ProjectOverview />
      </QueryClientProvider>
    </Layout>
  )
}
export default Project
