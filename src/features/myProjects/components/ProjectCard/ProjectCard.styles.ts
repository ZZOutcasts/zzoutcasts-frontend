import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  cardContent: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    height: `calc( 100% - 200px)`
  },
  imageContainer: {
    height: 200
  }
}))
