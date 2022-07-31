import React from 'react'
import { routes } from '@config/routes'
import { Text, useMantineTheme } from '@mantine/core'
import { AiOutlinePlus } from 'react-icons/ai'
import { useStyles } from '@features/myProjects/components/CreateProjectCard/CreateProjectCard.styles'
import { CardContainer } from '@features/myProjects/components/CardContainer'

export const CreateProjectCard = () => {
  const theme = useMantineTheme()
  const { classes } = useStyles()
  return (
    <CardContainer link={routes.createProject()}>
      <Text size="xl" className={classes.iconContainer}>
        <AiOutlinePlus style={{ color: theme.colors.gray[7] }} />
      </Text>
    </CardContainer>
  )
}
