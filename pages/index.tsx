import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import { InferGetStaticPropsType } from 'next';

interface ExploreItem {
  image: string,
    location: string,
    distance: string 
}

interface ExploreData {
  items: ExploreItem[]
}

const Home: NextPage<ExploreData> = ( exploreData : ExploreData) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull something from the server */}
          { exploreData.items.map( item => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch("https://links.papareact.com/pyp");
  const exploreItems: ExploreItem[] = await res.json();

  const exploreData: ExploreData = {
    items: exploreItems
  }

  return {
    props: {
      exploreData
    }
  }
}
