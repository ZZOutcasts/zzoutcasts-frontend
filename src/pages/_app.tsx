import { ThemeProvider } from '@components/providers/ThemeProvider'
import type { AppProps } from 'next/app'
import { Container } from '@components/navigation/Container/Container'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
