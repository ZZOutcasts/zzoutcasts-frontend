import { ProjectManagementTabs } from '@features/projectManagement/components/ProjectManagementTabs'
import { useUserProject } from '@features/projectManagement/hooks'
import { ProjectNotFound } from '@features/projectManagement/components/ProjectNotFound'
import { Group, Loader } from '@mantine/core'
import { ProjectIdProvider } from '@features/projectManagement/contexts/ProjectIdContext'

interface IProjectManagementContainer {
  projectId: string
}

export const ProjectManagementContainer = ({
  projectId
}: IProjectManagementContainer) => {
  const { isError, isLoading, data } = useUserProject(projectId)

  if (isError) {
    return <ProjectNotFound />
  }
  if (isLoading) {
    return (
      <Group position="center">
        <Loader />
      </Group>
    )
  }

  return (
    <ProjectIdProvider projectId={data.id}>
      <ProjectManagementTabs />
    </ProjectIdProvider>
  )
}
