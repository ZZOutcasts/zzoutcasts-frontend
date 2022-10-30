import type { NextPage } from 'next'
import { ErrorPage } from '@components/navigation/ErrorPage/ErrorPage'

const NotFoundErrorPage: NextPage = () => {
  return (
    <ErrorPage
      errorCode="404"
      title="Not Found"
      message="Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL."
    />
  )
}

export default NotFoundErrorPage
