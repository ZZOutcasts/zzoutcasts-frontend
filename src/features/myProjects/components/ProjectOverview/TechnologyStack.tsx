import React from 'react'
import { Box, Image, List, ThemeIcon, Title } from '@mantine/core'
import { useFetchTechnologies } from '@features/createProject/hooks/useFetchTechnologies'

export const TechnologyStack = () => {
  const { isLoading, error, data } = useFetchTechnologies()

  if (isLoading) {
    return null
  }

  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Title order={2} mt="lg">
        Technology Stack
      </Title>
      <List mt="sm" spacing="xs">
        {data &&
          data.map(({ imageUrl, name }) => {
            return (
              <List.Item
                icon={
                  <ThemeIcon variant="light" size={24} radius="xl">
                    <Image src={imageUrl} />
                  </ThemeIcon>
                }
              >
                {name}
              </List.Item>
            )
          })}
      </List>
    </Box>
  )
}
