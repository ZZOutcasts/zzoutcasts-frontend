import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ProjectManagementContainer } from '@features/projectManagement/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@components/navigation/Layout'

const queryClient = new QueryClient()

const Management: NextPage = () => {
  const router = useRouter()

  const { projectId } = router.query

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        {projectId && (
          <ProjectManagementContainer projectId={projectId as string} />
        )}
      </QueryClientProvider>
    </Layout>
  )
}

export default Management
