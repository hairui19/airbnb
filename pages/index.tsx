import type { GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import { InferGetStaticPropsType } from 'next';
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'

export interface ExploreItem {
    img: string,
    location: string,
    distance: string 
}

export interface HomeCard {
  img: string,
  title: string
}

interface HomeData {
  exploreItems: ExploreItem[]
  homeCards: HomeCard[] 
}

export const getStaticProps: GetStaticProps<HomeData> = async () => {

  const https = require('https');
  const agent = new https.Agent({
  rejectUnauthorized: false
  });

  const options = {
    agent,
    method: 'GET',
  }

  const exploreItems = await fetch('https://links.papareact.com/pyp', options).then(res => res.json());
  const homeCards = await fetch('https://links.papareact.com/zp1', options).then(res => res.json())

  return {
    props: {
      exploreItems: exploreItems,
      homeCards: homeCards
    },
  };
};


const Home: NextPage<HomeData> = ( homeData : HomeData) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-1">
        <section className='pt-6'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull something from the server */}
         <div className='grid grid-cols-2
         sm:grid-cols-2
         lg:grid-cols-3
         xl:grid-cols-4
         '>
         { homeData?.exploreItems.map( item => (
            <SmallCard 
              key={`${item.location}-${item.distance}`}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
         </div>
        </section>

        {/* Live anywhere section */}
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
          {homeData?.homeCards.map( homeCard => (
            <MediumCard 
            key={homeCard.title}
            img={homeCard.img}
            title={homeCard.title}
            />
          ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home


