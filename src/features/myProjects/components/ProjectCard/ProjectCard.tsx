import { Card, Group, Text } from '@mantine/core'
import { StatusBadge } from '@features/myProjects/components/StatusBadge'
import { useStyles } from '@features/myProjects/components/ProjectCard/ProjectCard.styles'
import { routes } from '@config/routes'
import { ProjectCardContainer } from '@features/myProjects/components/ProjectCardContainer'
import Image from 'next/image'
import { shortenText } from '@utils'
import { UserProjectPreview } from '@api/types'

const MAX_PROJECT_NAME_LENGTH = 34

type ProjectCardProps = {
  project: UserProjectPreview
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { classes } = useStyles()

  return (
    <ProjectCardContainer link={routes.project(project.id)}>
      <Card.Section className={classes.imageContainer}>
        <Image
          src={project.imageUrl}
          alt={project.name}
          layout="fixed"
          quality="100"
          width={400}
          height={200}
        />
      </Card.Section>

      <Card.Section className={classes.cardContent} mt="md">
        <Group position="apart">
          <Text size="md" weight={500}>
            {shortenText(MAX_PROJECT_NAME_LENGTH, project.name)}
          </Text>
          <StatusBadge status={project.status} />
        </Group>
      </Card.Section>
    </ProjectCardContainer>
  )
}
