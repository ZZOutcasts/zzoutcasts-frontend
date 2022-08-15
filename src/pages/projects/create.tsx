import type { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { CreateProjectFormContainer } from '@features/createProject/components/CreateProjectFormContainer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const MyProjects: NextPage = () => {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <CreateProjectFormContainer />
      </QueryClientProvider>
    </Layout>
  )
}
export default MyProjects
