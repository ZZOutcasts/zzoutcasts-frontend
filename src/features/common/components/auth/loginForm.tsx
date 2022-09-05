import { routes } from '@config/routes'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button
} from '@mantine/core'

export const LoginForm = () => {
  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome back!</Title>
      <Text color="dimmed" size="lg" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> href={routes.registerDemo()} size="lg">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mail.com" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor<'a'> href={routes.forgotPasswordFormDemo()} size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}
