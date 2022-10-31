import type { AppProps } from 'next/app'
import { AppContainer } from '@features/appContainer/AppContainer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  )
}

export default MyApp
