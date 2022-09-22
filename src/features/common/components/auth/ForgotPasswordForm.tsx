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
import { FixInputAutoCompletionStyles } from '@features/common/components/customInputs/FixInputAutoCompletionStyles'

interface ForgotPasswordFormProps {
  onClose: () => void
  openLoginForm: () => void
}

export const ForgotPasswordForm = ({
  onClose,
  openLoginForm
}: ForgotPasswordFormProps) => {
  const goToLoginForm = () => {
    openLoginForm()
    onClose()
  }

  return (
    <Container size={460} my={30}>
      <Title align="center">Forgot your password?</Title>
      <Text color="dimmed" mt={15} size="md" align="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <FixInputAutoCompletionStyles>
          <TextInput label="Your email" placeholder="you@mail.com" required />
        </FixInputAutoCompletionStyles>
        <Group position="apart" mt="lg">
          <Anchor color="dimmed" size="sm" onClick={goToLoginForm}>
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
