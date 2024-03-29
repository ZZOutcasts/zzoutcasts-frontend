import React, { ReactNode } from 'react'
import Link from 'next/link'
import { Card } from '@mantine/core'
import { useStyles } from '@features/myProjects/components/ProjectCardContainer/ProjectCardContainer.styles'

interface CardContainerProps {
  children: ReactNode
  link: string
}

export const ProjectCardContainer = ({
  children,
  link
}: CardContainerProps) => {
  const { classes } = useStyles()

  return (
    <Link href={link}>
      <a className={classes.link}>
        <Card
          shadow="xs"
          withBorder
          radius="md"
          p="none"
          className={classes.card}
        >
          {children}
        </Card>
      </a>
    </Link>
  )
}
