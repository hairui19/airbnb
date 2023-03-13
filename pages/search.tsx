import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { format } from "date-fns"
import { GetServerSideProps } from "next"
import InfoCard from "../components/InfoCard"

const Search = ({ searchResults }: Props) => {
    
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query

    const formattedStarDate = format(new Date(startDate as string), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy")
    const range = `${formattedStarDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {numberOfGuests} number of guests
                    </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <SearchFilter title="Cancellation Flexibility" />
                        <SearchFilter title="Type of Place" />
                        <SearchFilter title="Price" />
                        <SearchFilter title="Rooms and Beds" />
                        <SearchFilter title="More filters" />
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(searchResult => {
                            return (
                                <InfoCard
                                    key={`${searchResult.long}-${searchResult.lat}`}
                                    img={searchResult.img}
                                    location={searchResult.location}
                                    title={searchResult.title}
                                    description={searchResult.description}
                                    star={searchResult.star}
                                    price={searchResult.price}
                                    total={searchResult.total}
                                    long={searchResult.long}
                                    lat={searchResult.lat}
                                />
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

interface SearchFilterProps {
    title: string
}

const SearchFilter = ({ title }: SearchFilterProps) => {
    return (
        <p className="px-4 py-2 border rounded-full cursor-pointer 
                        hover:shadow-lg 
                        active:scale-95 active:bg-gray-100 
                        transition transform duration-100 ease-out">
            {title}
        </p>
    )
}

interface Props {
    searchResults: SearchResult[]
}

export interface SearchResult {
    img: string,
    location: string,
    title: string,
    description: string,
    star: number,
    price: string,
    total: string,
    long: number,
    lat: number
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const https = require('https');
    const agent = new https.Agent({
        rejectUnauthorized: false
    });

    const options = {
        agent,
        method: 'GET',
    }

    const searchResults = await fetch("https://links.papareact.com/isz", options).then(res => res.json());

    return {
        props: {
            searchResults: searchResults
        }
    }
}

export default Search