import { routes } from '@config/routes'
import { Badge, Card, Grid, Text } from '@mantine/core'
import Link from 'next/link'
import { useStyles } from './ProjectItem.styles'

export interface ProjectItemProps {
  projectId: string
  projectName: string
  projectOwner: string
  recruitments?: string[]
  techStack: string[]
}

export const ProjectItem = ({
  projectId,
  projectName,
  projectOwner,
  recruitments,
  techStack
}: ProjectItemProps) => {
  const { classes } = useStyles()

  return (
    <Link href={routes.project(projectId)}>
      <a className={classes.link}>
        <Card
          pl="1rem"
          className={classes.groupItem}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[1]
          })}
        >
          <Grid grow>
            <Grid.Col span={9}>
              <Text size="xl">{projectName}</Text>
              <Text size="sm">{projectOwner}</Text>
            </Grid.Col>
            <Grid.Col span={2}>
              {recruitments && recruitments.length > 0 && (
                <Badge color="green">Open recruitments</Badge>
              )}
            </Grid.Col>

            <Grid.Col span={2} offset={9} mt={-20}>
              {techStack.map((tech) => (
                <Badge>{tech}</Badge>
              ))}
            </Grid.Col>
          </Grid>
        </Card>
      </a>
    </Link>
  )
}
