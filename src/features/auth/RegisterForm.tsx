import { useForm, zodResolver } from '@mantine/form'
import {
  Anchor,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title
} from '@mantine/core'
import { z } from 'zod'
import { useRegisterUser } from '@api/hooks/useRegisterUser'
import { RegisterUser } from '@api/interfaces/RegisterUser'
import { LoadingButton } from '@components/customInputs/LoadingButton'

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must have at least 8 letters' })
})

interface RegisterFormProps {
  onClose: () => void
  openLoginForm: () => void
}

export const RegisterForm = ({ onClose, openLoginForm }: RegisterFormProps) => {
  const { mutate, isLoading, isError } = useRegisterUser()

  const form = useForm({
    validate: zodResolver(registerSchema),
    initialValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const forwardToLoginForm = () => {
    openLoginForm()
    onClose()
  }

  const handleSubmit = (values: RegisterUser) => {
    mutate(
      { userData: values },
      {
        onSuccess: forwardToLoginForm
      }
    )
  }

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome to Projectly!</Title>
      <Text color="dimmed" size="lg" align="center" mt={5}>
        Already registered ?{' '}
        <Anchor<'a'> onClick={forwardToLoginForm} size="lg">
          Log in
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          autoComplete="new-password"
        >
          <TextInput
            label="Name"
            placeholder="Name"
            mb={5}
            required
            autoComplete="new-password"
            disabled={isLoading}
            {...form.getInputProps('username')}
          />
          <TextInput
            label="Email"
            placeholder="you@mail.com"
            mb={5}
            required
            autoComplete="new-password"
            disabled={isLoading}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            autoComplete="new-password"
            disabled={isLoading}
            {...form.getInputProps('password')}
          />

          <LoadingButton fullWidth mt="xl" type="submit" isLoading={isLoading}>
            Register
          </LoadingButton>
          {isError && (
            <Text align="center" color="red" mt={5}>
              An error occurred. Try again later
            </Text>
          )}
        </form>
      </Paper>
    </Container>
  )
}
