import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
    </div>
  )
}

export default Home
