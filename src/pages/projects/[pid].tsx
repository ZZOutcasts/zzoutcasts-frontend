import { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { ProjectOverview } from '@features/myProjects/components/ProjectOverview/ProjectOverview'

export const Project: NextPage = () => {
  return (
    <Layout>
      <ProjectOverview />
    </Layout>
  )
}
export default Project
