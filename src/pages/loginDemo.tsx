import type { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { LoginForm } from '@features/common/components/auth'

const LoginFormDemo: NextPage = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  )
}

export default LoginFormDemo
