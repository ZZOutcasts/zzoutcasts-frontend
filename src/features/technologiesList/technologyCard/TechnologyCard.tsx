import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  keyframes,
  CardSection
} from '@mantine/core'

export const TechnologyCard = ({ project }) => {
  return (
    <Card shadow="md" p="lg" radius="md" withBorder>
      <CardSection>
        <Image src={project.imageUrl}></Image>
      </CardSection>
      <Group position="center" mt="md" mb="xs">
        <Text size="sm" color="dimmed">
          {project.name}
        </Text>
      </Group>

      <Text align="center" size="sm" color="dimmed">
        {project.description}
      </Text>

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
