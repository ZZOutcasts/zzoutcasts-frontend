import type { NextPage } from 'next'
import { Layout } from '@features/common/components/navigation/Layout'
import { SearchProjects } from '@features/searchProjects/components'

const SearchProjectsPage: NextPage = () => {
  return (
    <Layout>
      <SearchProjects />
    </Layout>
  )
}
export default SearchProjectsPage
