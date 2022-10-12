import type { NextPage } from 'next'
import { CreateProjectFormContainer } from '@features/createProject/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@components/navigation/Layout'

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
