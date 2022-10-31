import type { NextPage } from 'next'
import { ErrorPage } from '@components/other/ErrorPage'

const Home: NextPage = () => {
  return (
    <ErrorPage
      errorCode="403"
      title="Forbidden"
      message="The resource you are trying to open is forbidden.  Todo: add better description"
    />
  )
}

export default Home
