import { Container, Text, Group, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { useStyles } from './ProjectItem.styles'

interface ProjectItemProps {
  projectId: number
  projectName: string
}

export const ProjectItem = ({ projectId, projectName }: ProjectItemProps) => {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <Link href={`projects/${projectId}`}>
      <a className={classes.link}>
        <Group
          spacing={'xl'}
          pl={'1rem'}
          className={classes.groupItem}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[1]
          })}
        >
          <Text size="xl">{projectName}</Text>
        </Group>
      </a>
    </Link>
  )
}
