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
import { useLogoutUser } from '@api/hooks/useLogoutUser'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { noAuthRoute } from '@features/auth/utils/noAuthRoute'
import { UserContext } from '@contexts/UserContext'

interface UserLinkProps {
  user: User
}

export const UserLink = ({ user }: UserLinkProps) => {
  const router = useRouter()
  const theme = useMantineTheme()
  const { username, email, avatarUrl } = user

  const { mutate } = useLogoutUser()

  const { reloadUser } = useContext(UserContext)

  const handleLogout = () => {
    mutate(undefined, {
      onSettled: () => {
        reloadUser()
        router.push(noAuthRoute())
      }
    })
  }

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
        <ActionIcon color="red.5" onClick={handleLogout}>
          <TbLogout size="md" />
        </ActionIcon>
      </Group>
    </Group>
  )
}
