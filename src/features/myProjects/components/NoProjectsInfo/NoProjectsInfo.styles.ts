import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  link: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.colors.blue[7],
    ':hover': {
      color: theme.colors.blue[5]
    }
  }
}))
