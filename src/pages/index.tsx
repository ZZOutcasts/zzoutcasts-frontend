import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <Link href="/hello" passHref>
        test
      </Link>
    </div>
  )
}

export default Home
