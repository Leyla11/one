
const Card = (prop) => {
    return (
        <div className="card">
            <img src={prop.data.image} alt={prop.data.title} />
            <h3>{prop.data.title}</h3>
            <p>{prop.data.description}</p>
        </div>
    )
}

export default Card