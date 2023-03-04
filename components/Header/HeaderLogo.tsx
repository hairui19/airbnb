import Image from "next/legacy/image"
import { useRouter } from "next/router";

const HeaderLogo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
        />
    </div>
    )
}

export default HeaderLogo