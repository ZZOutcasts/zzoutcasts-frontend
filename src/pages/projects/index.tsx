import type { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { UserProjects } from '@features/myProjects/components'

const MyProjects: NextPage = () => {
  return (
    <Layout>
      <UserProjects />
    </Layout>
  )
}
export default MyProjects
