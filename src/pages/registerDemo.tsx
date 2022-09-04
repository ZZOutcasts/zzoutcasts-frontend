import type { NextPage } from 'next'
import { Layout } from '../features/common/components/navigation/Layout'
import { RegisterForm } from '@features/common/components/auth'

const RegisterFormDemo: NextPage = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  )
}

export default RegisterFormDemo
