import {
  Anchor,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { z } from 'zod'
import { FixInputAutoCompletionStyles } from '@components/customInputs/FixInputAutoCompletionStyles'
import { useLoginUser } from '@api/hooks/useLoginUser'
import { LoginUser } from '@api/interfaces/LoginUser'
import { useRouter } from 'next/router'
import { routes } from '@config/routes'
import { LoadingButton } from '@components/customInputs/LoadingButton'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { StatusCode } from '@utils/StatusCode'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string()
})

interface LoginFormProps {
  onClose: () => void
  openRegisterForm: () => void
  openForgotPasswordForm: () => void
}

export const LoginForm = ({
  onClose,
  openRegisterForm,
  openForgotPasswordForm
}: LoginFormProps) => {
  const router = useRouter()

  const DEFAULT_ERROR_MESSAGE = ''
  const [errorMessage, setErrorMessage] = useState('')

  const { mutate, isError, isLoading } = useLoginUser()

  const form = useForm<LoginUser>({
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
  const handleSubmit = (values: LoginUser) => {
    setErrorMessage(DEFAULT_ERROR_MESSAGE)
    mutate(
      { userData: values },
      {
        onSuccess: () => {
          onClose()
          router.push(routes.myProjects())
        },
        onError: (error) => {
          if (
            error instanceof AxiosError &&
            error?.response?.status === StatusCode.NOT_FOUND
          ) {
            return setErrorMessage('Email or password is invalid')
          }
          setErrorMessage('An error occurred. Try again later')
        }
      }
    )
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
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <FixInputAutoCompletionStyles>
            <TextInput
              disabled={isLoading}
              label="Email"
              placeholder="you@mail.com"
              required
              {...form.getInputProps('email')}
            />
          </FixInputAutoCompletionStyles>
          <FixInputAutoCompletionStyles>
            <PasswordInput
              disabled={isLoading}
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('password')}
            />
          </FixInputAutoCompletionStyles>
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" disabled={isLoading} />
            <Anchor<'a'> onClick={goToForgotPasswordForm} size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <LoadingButton fullWidth mt="xl" type="submit" isLoading={isLoading}>
            Sign in
          </LoadingButton>
          <Text align="center" color="red" mt={5}>
            {errorMessage}
          </Text>
        </form>
      </Paper>
    </Container>
  )
}
