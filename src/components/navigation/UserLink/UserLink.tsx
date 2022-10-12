import {
  Avatar,
  Text,
  useMantineTheme,
  Box,
  Space,
  UnstyledButton,
  Group,
  ActionIcon
} from '@mantine/core'
import Link from 'next/link'
import { TbLogout } from 'react-icons/tb'
import { routes } from '@config/routes'
import { useFetchCurrentUser } from '@api/hooks/useFetchCurrentUser'

export const UserLink = () => {
  const theme = useMantineTheme()
  const { username, email, avatarUrl } = useFetchCurrentUser()

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
