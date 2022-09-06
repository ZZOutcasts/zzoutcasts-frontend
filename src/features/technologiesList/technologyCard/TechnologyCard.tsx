import {
  Card,
  Center,
  Image,
  Text,
  Button,
  Group,
  CardSection
} from '@mantine/core'

export const TechnologyCard = ({ project }) => {
  return (
    <Card shadow="md" p="20px" radius="md" withBorder>
      <CardSection>
        <Group position="left" spacing="xl">
          <Image src={project.imageUrl} height="70px" width="70px"></Image>
          <Text align="end" size="md" weight={700} ml="50px">
            {project.name}
          </Text>
        </Group>
        <Text pt="30px" align="center" size="sm" color="dimmed">
          {project.description}
        </Text>
      </CardSection>

      <Group position="center" spacing="lg">
        <Button variant="light" color="blue" radius="md" size="xs" mt="xl">
          Check projects
        </Button>
        <Button variant="light" color="blue" radius="md" size="xs" mt="xl">
          Check recruitments
        </Button>
      </Group>
    </Card>
  )
}
