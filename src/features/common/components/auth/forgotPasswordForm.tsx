import { routes } from '@config/routes'
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box
} from '@mantine/core'

export function ForgotPasswordForm() {
  return (
    <Container size={460} my={30}>
      <Title align="center">Forgot your password?</Title>
      <Text color="dimmed" mt={15} size="md" align="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="you@mail.com" required />
        <Group position="apart" mt="lg">
          <Anchor color="dimmed" size="sm" href={routes.loginDemo()}>
            <Center inline>
              <Box ml={5}>Back to login page</Box>
            </Center>
          </Anchor>
          <Button>Reset password</Button>
        </Group>
      </Paper>
    </Container>
  )
}
