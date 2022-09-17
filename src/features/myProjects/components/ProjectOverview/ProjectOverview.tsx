import React from 'react'
import {
  Box,
  Button,
  Container,
  Divider,
  Image,
  Space,
  Text,
  Title
} from '@mantine/core'
import { StatusBadge } from '@features/myProjects/components/StatusBadge'
import { useUserProjects } from '@features/myProjects/hooks'
import { useRouter } from 'next/router'
import { Roles } from '@features/myProjects/components/ProjectOverview/Roles'
import { Team } from '@features/myProjects/components/ProjectOverview/Team'
import { TechnologyStack } from '@features/myProjects/components/ProjectOverview/TechnologyStack'

export const ProjectOverview = () => {
  const router = useRouter()
  const { pid } = router.query
  const projects = useUserProjects()

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
            <Divider my="sm" />
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
              <TechnologyStack />
              <Roles />
            </Box>
            <Button variant="light" mt="xl" size="xl">
              Send join request
            </Button>
          </Box>
          <Space w="xl" />
          <Team />
        </>
      )}
    </Container>
  )
}
