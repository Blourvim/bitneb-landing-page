import './laptop-card.css'
const LaptopCard = (props) => {
    const { primary, secondary, image, text, alt } = props.content


    return (
        <div className="card">

            <h2 className="secondary-card-title">{primary}</h2>
            <h2 className="primary-card-title">{secondary}</h2>
            <img src={image}alt={alt} className="card-image" />
            <p className="card-text">{text}</p>
        </div>

    )

}

export default LaptopCard