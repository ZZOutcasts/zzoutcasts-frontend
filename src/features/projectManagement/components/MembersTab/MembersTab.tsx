import { Group, Loader, Stack, Text } from '@mantine/core'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { MemberInfo } from '@features/projectManagement/components/MemberInfo'
import { useFetchProjectMembers } from '@api/hooks'
import { ProjectMember } from '@api/types'

export const MembersTab = () => {
  const { projectId } = useContext(ProjectIdContext)
  const { isError, isLoading, data } = useFetchProjectMembers(projectId)

  if (isLoading) {
    return (
      <Group position="center" sx={{ marginTop: 20 }}>
        <Loader />
      </Group>
    )
  }

  if (isError) {
    return (
      <Text size="lg" color="red">
        An error occurred. Try again later
      </Text>
    )
  }

  return (
    <Stack>
      {data!.map((member: ProjectMember) => (
        <MemberInfo member={member} />
      ))}
    </Stack>
  )
}
