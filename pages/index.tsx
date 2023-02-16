import type { GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import { InferGetStaticPropsType } from 'next';
import SmallCard from '../components/SmallCard'

export interface ExploreItem {
    img: string,
    location: string,
    distance: string 
}

interface ExploreData {
  exploreItems: ExploreItem[]
}

export const getStaticProps: GetStaticProps<ExploreData> = async () => {

  const https = require('https');
  const agent = new https.Agent({
  rejectUnauthorized: false
  });

  const response = await fetch('https://links.papareact.com/pyp', 
  { 
    agent,
    method: 'GET',
});
  const exploreItems = await response.json();

  return {
    props: {
      exploreItems,
    },
  };
};


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
         <div className='grid grid-cols-2
         sm:grid-cols-2
         lg:grid-cols-3
         xl:grid-cols-4
         '>
         { exploreData?.exploreItems.map( item => (
            <SmallCard 
              key={`${item.location}-${item.distance}`}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
         </div>
        </section>
      </main>
    </div>
  )
}

export default Home


