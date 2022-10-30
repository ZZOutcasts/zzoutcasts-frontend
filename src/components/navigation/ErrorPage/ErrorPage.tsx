import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group
} from '@mantine/core'
import Link from 'next/link'
import { noAuthRoute } from '@features/auth/utils'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32
    }
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5
  }
}))

interface ErrorPageProps {
  errorCode: string
  title: string
  message: string
}

export const ErrorPage = ({ errorCode, title, message }: ErrorPageProps) => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{errorCode}</div>
      <Title className={classes.title}>{title}</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        {message}
      </Text>
      <Group position="center">
        <Link href={noAuthRoute()}>
          <Button variant="subtle" size="md">
            Go to home page
          </Button>
        </Link>
      </Group>
    </Container>
  )
}
