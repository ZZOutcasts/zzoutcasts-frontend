import { useForm, zodResolver } from '@mantine/form'
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
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must have at least 8 letters' })
})

interface RegisterFormProps {
  onSubmit: () => void
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const form = useForm({
    validate: zodResolver(registerSchema),
    initialValues: {
      name: '',
      email: '',
      password: ''
    }
  })

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
        <form
          autoComplete="new-password"
          onSubmit={form.onSubmit((values) => {
            onSubmit()
          })}
        >
          <TextInput
            label="Name"
            placeholder="Name"
            mb={5}
            required
            autoComplete="new-password"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="you@mail.com"
            mb={5}
            required
            autoComplete="new-password"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            autoComplete="new-password"
            {...form.getInputProps('password')}
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
