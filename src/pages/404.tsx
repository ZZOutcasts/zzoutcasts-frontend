import type { NextPage } from 'next'
import { ErrorPage } from '@components/navigation/ErrorPage/ErrorPage'

const NotFoundErrorPage: NextPage = () => {
  return (
    <ErrorPage
      errorCode="404"
      title="Not Found"
      message="Resource you are trying to open does not exist. You may have mistyped the address, or the resource has been moved to another URL."
    />
  )
}

export default NotFoundErrorPage
