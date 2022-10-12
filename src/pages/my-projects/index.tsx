import type { NextPage } from 'next'
import { UserProjects } from '@features/myProjects/components'
import { Layout } from '@components/navigation/Layout'

const MyProjects: NextPage = () => {
  return (
    <Layout>
      <UserProjects />
    </Layout>
  )
}
export default MyProjects
