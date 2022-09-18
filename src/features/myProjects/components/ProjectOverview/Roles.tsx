import React from 'react'
import { Box, Image, List, ThemeIcon, Title } from '@mantine/core'
import { useFetchRoles } from '@features/createProject/hooks'

export const Roles = () => {
  const { isLoading, error, data } = useFetchRoles()

  if (isLoading) {
    return null
  }

  return (
    <Box ml="xl" style={{ display: 'flex', flexDirection: 'column' }}>
      <Title order={2} mt="lg">
        Roles
      </Title>
      <List mt="sm" spacing="xs">
        {data &&
          data.map(({ imageUrl, name }) => {
            return (
              <List.Item
                icon={
                  <ThemeIcon
                    variant="light"
                    size={24}
                    radius="xl"
                    color="yellow"
                  >
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
