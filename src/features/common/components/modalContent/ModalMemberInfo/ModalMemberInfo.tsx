import { Avatar, Group, Text } from '@mantine/core'

interface ModalMemberInfoProps {
  username: string
  avatarUrl?: string
}
export const ModalMemberInfo = ({
  username,
  avatarUrl
}: ModalMemberInfoProps) => {
  return (
    <Group>
      <Avatar radius="xl" alt="Member's avatar" src={avatarUrl} />
      <Text weight="bold">{username}</Text>
    </Group>
  )
}
