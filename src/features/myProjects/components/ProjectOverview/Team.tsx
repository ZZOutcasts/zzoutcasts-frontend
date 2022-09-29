import React from 'react'
import { Box, Space, Title, useMantineTheme } from '@mantine/core'
import { useFetchCurrentUser } from '@api/hooks/useFetchCurrentUser'
import { UserInfo } from './UserInfo'

export const Team = () => {
  const { username, email, avatar } = useFetchCurrentUser()
  const theme = useMantineTheme()

  return (
    <>
      <Space w="xl" />
      <Box
        style={{
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[2],
          borderRadius: '20px'
        }}
        p="xl"
      >
        <Title order={1}>Our Team</Title>
        <Title order={2} mt="lg">
          Leader
        </Title>
        <UserInfo avatar={avatar} email={email} name={username} />
        <Title order={2} mt="lg">
          Members
        </Title>
        <UserInfo avatar={avatar} email={email} name={username} />
        <UserInfo avatar={avatar} email={email} name={username} />
      </Box>
    </>
  )
}
