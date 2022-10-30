import type { NextPage } from 'next'
import { ErrorPage } from '@components/navigation/ErrorPage/ErrorPage'

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
