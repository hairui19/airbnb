import Image from "next/image"

const Header = () => {
    return (
        <header>
            <h1>I am the header</h1>

            {/* left */}
            <div>
                <Image src="https://links.papareact.com/qd3" 
                layout="fill"
                />
            </div>

            {/* middle */}
            <div></div>

            {/* right */}
            <div></div>

        </header>
    )
}

export default Header