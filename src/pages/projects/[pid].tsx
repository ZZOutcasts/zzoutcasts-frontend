import { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { ProjectOverview } from '@features/myProjects/components/ProjectOverview/ProjectOverview'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
