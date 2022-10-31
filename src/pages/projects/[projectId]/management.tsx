import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ProjectManagementContainer } from '@features/projectManagement/components'

const Management: NextPage = () => {
  const router = useRouter()

  const { projectId } = router.query

  return projectId ? (
    <ProjectManagementContainer projectId={projectId as string} />
  ) : (
    <></>
  )
}

export default Management
