import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  innerContainer: {
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
    }`,
    paddingLeft: 10,
    borderRadius: 4
  },
  textContainer: { lineHeight: 1, fontSize: 12 }
}))
