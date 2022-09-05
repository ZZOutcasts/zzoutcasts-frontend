import type { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { ForgotPasswordForm } from '@features/common/components/auth'

const ForgotPasswordFormDemo: NextPage = () => {
  return (
    <Layout>
      <ForgotPasswordForm />
    </Layout>
  )
}

export default ForgotPasswordFormDemo
