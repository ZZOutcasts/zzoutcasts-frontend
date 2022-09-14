import { Group, Loader, Stack, Text } from '@mantine/core'
import { Member } from '@features/projectManagement/types/projectManagement'
import { useContext } from 'react'
import { ProjectIdContext } from '@features/projectManagement/contexts/ProjectIdContext'
import { useProjectMembers } from '@features/projectManagement/hooks'
import { MemberInfo } from '@features/projectManagement/components/MemberInfo'

export const MembersTab = () => {
  const { projectId } = useContext(ProjectIdContext)
  const { isError, isLoading, data } = useProjectMembers(projectId)

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
      {data!.map((member: Member) => (
        <MemberInfo member={member} />
      ))}
    </Stack>
  )
}
