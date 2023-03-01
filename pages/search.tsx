import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { format } from "date-fns"

const Search = () => {
    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query

    const formattedStarDate = format(new Date(startDate as string), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy")
    const range = `${formattedStarDate} - ${formattedEndDate}`

    return (
        <div>
            <Header />
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

export default Search