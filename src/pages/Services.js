import Card from "../components/Card"

const Services = () => {

    let allData = [
        {
            title: "Web Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam maxime fugiat quisquam? Exfacilis nesciunt maiores tenetur!",
            image: "assets/pincel.PNG"
        },
        {
            title: "Advertising",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam maxime fugiat quisquam? Exfacilis nesciunt maiores tenetur!",
            image: "assets/grafica.PNG"
        },
        {
            title: "Apps Design",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.aliquam maxime fugiat quisquam? Exfacilis nesciunt maiores tenetur!",
            image: "assets/bracket.PNG"
        }
    ]

    return (
        <div>
            <h2>Services</h2>
            <div className="services">
            {allData.map(data => (
                <Card key={data.title} data={data} />
            ))}
            </div>
            </div>
    )
}

export default Services