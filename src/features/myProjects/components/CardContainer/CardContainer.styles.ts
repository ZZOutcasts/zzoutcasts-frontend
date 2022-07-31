import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: 0,
    width: '400px',
    height: 260,
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none'
  }
}))
