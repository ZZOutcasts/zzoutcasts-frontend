import React from 'react'

import { Text } from '@mantine/core'
import Link from 'next/link'
import { routes } from '@config/routes'
import { useStyles } from '@features/myProjects/components/NoProjectsInfo/NoProjectsInfo.styles'

export const NoProjectsInfo = () => {
  const { classes } = useStyles()
  return (
    <Text size="xl">
      Seems empty here, look for{' '}
      <Link href={routes.projectsSearch()}>
        <a className={classes.link}>projects to join</a>
      </Link>{' '}
      or{' '}
      <Link href={routes.createProject()}>
        <a className={classes.link}>start your own</a>
      </Link>
    </Text>
  )
}
