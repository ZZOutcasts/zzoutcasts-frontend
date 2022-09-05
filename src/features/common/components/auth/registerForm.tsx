import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm } from '@mantine/form'
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
import { ReactNode } from 'react'

export const RegisterForm = () => {
  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome to Projectly!</Title>
      <Text color="dimmed" size="lg" align="center" mt={5}>
        Already registerd ?{' '}
        <Anchor<'a'> href={routes.loginDemo()} size="lg">
          Log in
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Name" placeholder="Name" mb={5} required />
        <TextInput label="Email" placeholder="you@mail.com" mb={5} required />
        <PasswordInput label="Password" placeholder="Your password" required />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
        </Group>
        <Button fullWidth mt="xl">
          Register
        </Button>
      </Paper>
    </Container>
  )
}
