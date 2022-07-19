import type { NextPage } from 'next'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh'
        }}
        className="relative flex items-center justify-center h-screen overflow-hidden dark:bg-[#222]"
      >
        <h1 className="text-3xl font-black md:text-5xl dark:text-white">
          Hello World!
        </h1>
      </div>
    </>
  )
}

export default Home
