import { ProjectCard } from '@features/myProjects/components/ProjectCard'
import { Group } from '@mantine/core'
import { CreateProjectCard } from '@features/myProjects/components/CreateProjectCard'
import { NoProjectsInfo } from '@features/myProjects/components/NoProjectsInfo'
import { useStyles } from '@features/myProjects/components/UserProjects/UserProjects.styles'
import { useFetchUserProjects } from '@api/hooks'

export const UserProjects = () => {
  const { classes } = useStyles()

  const projects = useFetchUserProjects()

  return (
    <Group className={classes.container} position="center">
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      {projects && <CreateProjectCard />}
      {!projects && <NoProjectsInfo />}
    </Group>
  )
}
