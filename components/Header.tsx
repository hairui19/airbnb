import Image from "next/legacy/image"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
            {/* left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                />
            </div>

            {/* middle - search*/}
            <div className="flex items-center border-2 rounded-full py-2">
                <input className="flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="start your search"/>
                <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
            </div>

            {/* right */}
            <div></div>

        </header>
    )
}

export default Header