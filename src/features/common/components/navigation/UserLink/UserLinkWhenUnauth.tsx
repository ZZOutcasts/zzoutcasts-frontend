import { Text, Button, Group, Modal } from '@mantine/core'
import { useState } from 'react'
import { LoginForm } from '../../auth'
import { RegisterForm } from '../../auth'

export const UserLinkWhenUnauth = () => {
  const [loginOpened, setLoginOpened] = useState(false)
  const [registerOpened, setRegisterOpened] = useState(false)

  return (
    <>
      <Modal opened={loginOpened} onClose={() => setLoginOpened(false)}>
        <LoginForm onSubmit={() => setLoginOpened(false)} />
      </Modal>
      <Modal opened={registerOpened} onClose={() => setRegisterOpened(false)}>
        <RegisterForm onSubmit={() => setRegisterOpened(false)} />
      </Modal>
      <Group spacing="xs" noWrap py="10px" position="center">
        <Button
          variant="outline"
          size="xs"
          onClick={() => setLoginOpened(true)}
        >
          Login
        </Button>
        <Text>or</Text>
        <Button size="xs" onClick={() => setRegisterOpened(true)}>
          Register
        </Button>
      </Group>
    </>
  )
}
