import type { NextPage } from 'next'
import { Layout } from '../features/common/components/navigation/Layout'
import RecruimentForm from '@features/common/components/forms/recruitmentForm'

const RecruitmentFormDemo: NextPage = () => {
  return (
    <Layout>
      <RecruimentForm />
    </Layout>
  )
}

export default RecruitmentFormDemo