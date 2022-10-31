import { Button, Group, Modal, Text } from '@mantine/core'
import { useModalManagement } from '@hooks'
import {
  ForgotPasswordForm,
  LoginForm,
  RegisterForm
} from '@features/auth/components'

export const UserLinkWhenNotAuthenticated = () => {
  const loginModal = useModalManagement()
  const registerModal = useModalManagement()
  const forgotPasswordModal = useModalManagement()

  return (
    <>
      <Modal opened={loginModal.isOpened} onClose={loginModal.changeModalState}>
        <LoginForm
          onClose={loginModal.changeModalState}
          openRegisterForm={registerModal.changeModalState}
          openForgotPasswordForm={forgotPasswordModal.changeModalState}
        />
      </Modal>

      <Modal
        opened={forgotPasswordModal.isOpened}
        onClose={forgotPasswordModal.changeModalState}
      >
        <ForgotPasswordForm
          onClose={forgotPasswordModal.changeModalState}
          openLoginForm={loginModal.changeModalState}
        />
      </Modal>

      <Modal
        opened={registerModal.isOpened}
        onClose={registerModal.changeModalState}
      >
        <RegisterForm
          onClose={registerModal.changeModalState}
          openLoginForm={loginModal.changeModalState}
        />
      </Modal>
      <Group spacing="xs" noWrap py="10px" position="center">
        <Button
          variant="outline"
          size="xs"
          onClick={loginModal.changeModalState}
        >
          Login
        </Button>
        <Text>or</Text>
        <Button size="xs" onClick={registerModal.changeModalState}>
          Register
        </Button>
      </Group>
    </>
  )
}
