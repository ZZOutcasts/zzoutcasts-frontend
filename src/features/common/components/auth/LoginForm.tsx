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
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { FixInputAutoCompletionStyles } from '@features/common/components/customInputs/FixInputAutoCompletionStyles'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string()
})

interface LoginFormProps {
  onClose: () => void
  openRegisterForm: () => void
  openForgotPasswordForm: () =>void
}

export const LoginForm = ({ onClose, openRegisterForm,openForgotPasswordForm }: LoginFormProps) => {
  const form = useForm({
    validate: zodResolver(loginSchema),
    initialValues: {
      email: '',
      password: ''
    }
  })

  const forwardToRegisterForm = () => {
    openRegisterForm()
    onClose()
  }

const goToForgotPasswordForm = () => {
  openForgotPasswordForm()
  onClose()
}

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome back!</Title>
      <Text color="dimmed" size="lg" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> onClick={forwardToRegisterForm} size="lg">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit((values) => {
            onClose()
          })}
        >
          <FixInputAutoCompletionStyles>
            <TextInput
              label="Email"
              placeholder="you@mail.com"
              required
              {...form.getInputProps('email')}
            />
          </FixInputAutoCompletionStyles>
          <FixInputAutoCompletionStyles>
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('password')}
            />
          </FixInputAutoCompletionStyles>
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<'a'> onClick={goToForgotPasswordForm} size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
