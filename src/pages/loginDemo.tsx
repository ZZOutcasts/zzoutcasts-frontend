import type { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { LoginForm } from '@features/common/components/auth'

const LoginFormDemo: NextPage = () => {
  return (
    <Layout>
      {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
      <LoginForm onSubmit={() => {}} />
    </Layout>
  )
}

export default LoginFormDemo
