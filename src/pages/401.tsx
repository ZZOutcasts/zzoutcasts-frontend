import type { NextPage } from 'next'
import { ErrorPage } from '@components/other/ErrorPage'

const UnauthorizedErrorPage: NextPage = () => {
  return (
    <ErrorPage
      errorCode="401"
      title="Unauthorized"
      message="You should log in. Todo: add better description"
    />
  )
}

export default UnauthorizedErrorPage
