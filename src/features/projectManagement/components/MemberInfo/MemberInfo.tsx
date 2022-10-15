import { Avatar, Group, Paper, Text } from '@mantine/core'
import { MemberActionButtons } from '@features/projectManagement/components/MemberActionButtons'
import { ProjectMember } from '@api/interfaces'

interface MemberInfoProps {
  member: ProjectMember
}

export const MemberInfo = ({ member }: MemberInfoProps) => {
  const { username, permission } = member

  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      })}
    >
      <Group noWrap sx={{ justifyContent: 'space-between' }}>
        <Group>
          <Avatar radius="xl" alt="Member's avatar" />
          <div>
            <Text weight="bold">{username}</Text>
            <Text color="dimmed" size="sm">
              {permission}
            </Text>
          </div>
        </Group>
        <MemberActionButtons member={member} />
      </Group>
    </Paper>
  )
}
