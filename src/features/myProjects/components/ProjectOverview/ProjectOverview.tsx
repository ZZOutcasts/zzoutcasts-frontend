import React from 'react'
import {
  Image,
  Title,
  Text,
  List,
  Space,
  Box,
  Container,
  Button
} from '@mantine/core'
import { StatusBadge } from '@features/myProjects/components/StatusBadge'
import { useUserProjects } from '@features/myProjects/hooks'
import { useRouter } from 'next/router'
import { useCurrentUser } from '@features/user/hooks/useCurrentUser'
import { UserInfo } from './UserInfo'

export const ProjectOverview = () => {
  const router = useRouter()
  const { pid } = router.query
  const projects = useUserProjects()
  const { username, email, avatar } = useCurrentUser()

  if (pid === undefined) {
    return null
  }

  const currentProject = projects.filter((project) => project.id === pid)[0]

  return (
    <Container
      style={{
        display: 'flex'
      }}
      size="md"
    >
      {currentProject && (
        <>
          <Box>
            <div style={{ width: 240 }}>
              <Image
                radius="md"
                src={currentProject.imageUrl}
                alt="project thumbnail"
              />
            </div>
            <Space h="xs" />
            <StatusBadge status={currentProject.status} />
            <Title order={1} mt="lg">
              {currentProject.name}
            </Title>
            <Text size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet tellus vel dui cursus tincidunt quis sit amet diam. Nam ut
              tortor sit amet massa mollis blandit eget et lorem. Integer
              efficitur tempor leo in euismod. Suspendisse tellus erat, laoreet
              sit amet eros vitae, viverra placerat dui. Donec eleifend tellus
              vel dapibus dignissim. Ut gravida, ipsum id vehicula ornare, mi
              nulla rutrum velit, vel tincidunt quam neque non metus. Duis
              posuere vel ante non dapibus. Curabitur accumsan vestibulum
              dapibus.
            </Text>
            <Title order={2} mt="lg">
              Our Technology Stack
            </Title>
            <List>
              <List.Item>Example</List.Item>
              <List.Item>Example</List.Item>
              <List.Item>Example</List.Item>
              <List.Item>Example</List.Item>
              <List.Item>Example</List.Item>
            </List>
            <Button variant="light" mt="xl" size="xl">
              Send join request
            </Button>
          </Box>
          <Space w="xl" />
          <Box>
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
      )}
    </Container>
  )
}
