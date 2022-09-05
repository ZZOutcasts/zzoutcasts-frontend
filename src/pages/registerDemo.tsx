import type { NextPage } from 'next'
import { RegisterForm } from '@features/common/components/auth'
import { Layout } from '@features/common/components/navigation/Layout'

const RegisterFormDemo: NextPage = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  )
}

export default RegisterFormDemo
