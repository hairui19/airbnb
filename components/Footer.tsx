interface FooterElementData {
    title: string,
    elements: string[]
}

const footerElements = [
    { title: "ABOUT", elements: ["How Airbnb works", "NewsRoom", "Investors", "Airbnb Plus", "Airbnb Luxe"] },
    { title: "Accessibility", elements: ["This is not a real site", "It is pretty awesome clone", "Referrals accepted", "Papafam"] }
]

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            {footerElements.map(footerElement => {
                return (
                    <FooterElement
                        title={footerElement.title}
                        elements={footerElement.elements}
                    />
                )
            })}
        </div>
    )
}

const FooterElement = ({ title, elements }: FooterElementData) => {
    return (
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">{title}</h5>
            {elements.map(element => {
                return (
                    <p className=" cursor-pointer">{element}</p>
                )
            })}
        </div>
    )
}

export default Footer