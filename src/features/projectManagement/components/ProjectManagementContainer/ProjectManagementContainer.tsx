import { ProjectManagementTabs } from '@features/projectManagement/components/ProjectManagementTabs'
import { useUserProject } from '@features/projectManagement/hooks'
import { Group, Loader, Text } from '@mantine/core'
import { ProjectIdProvider } from '@features/projectManagement/contexts/ProjectIdContext'

interface IProjectManagementContainer {
  projectId: string
}

export const ProjectManagementContainer = ({
  projectId
}: IProjectManagementContainer) => {
  const { isError, isLoading, data } = useUserProject(projectId)

  if (isError) {
    return (
      <Group position="center">
        <Text size="xl" color="red">
          Project not found
        </Text>
      </Group>
    )
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
