import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Space,
  Text,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core'
import Link from 'next/link'
import { TbLogout } from 'react-icons/tb'
import { routes } from '@config/routes'
import { User } from '@api/interfaces'

interface UserLinkProps {
  user: User
}

export const UserLink = ({ user }: UserLinkProps) => {
  const theme = useMantineTheme()
  const { username, email, avatarUrl } = user

  return (
    <Group spacing="xs" noWrap>
      <Link href={routes.profile()} passHref>
        <UnstyledButton
          component="a"
          sx={{ display: 'flex', alignItems: 'center' }}
          p="xs"
        >
          <Avatar size="md" radius="md" src={avatarUrl} />
          <Space w="sm" />
          <Box>
            <Text size="md">{username}</Text>
            <Text size="xs" color={theme.colors.gray[5]}>
              {email}
            </Text>
          </Box>
        </UnstyledButton>
      </Link>
      <Group>
        <Link href="/test">
          <ActionIcon color="red.5">
            <TbLogout size="md" />
          </ActionIcon>
        </Link>
      </Group>
    </Group>
  )
}
