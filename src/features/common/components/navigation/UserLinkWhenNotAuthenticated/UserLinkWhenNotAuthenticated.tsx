import { Button, Group, Modal, Text } from '@mantine/core'
import { useModalManagement } from '@features/common/hooks/useModalManagement'
import { LoginForm, RegisterForm } from '@features/common/components/auth'

export const UserLinkWhenNotAuthenticated = () => {
  const loginModal = useModalManagement()
  const registerModal = useModalManagement()

  return (
    <>
      <Modal opened={loginModal.isOpened} onClose={loginModal.changeModalState}>
        <LoginForm
          onClose={loginModal.changeModalState}
          openRegisterForm={registerModal.changeModalState}
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
