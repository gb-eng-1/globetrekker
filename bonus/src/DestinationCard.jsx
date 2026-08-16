function DestinationCard({ image, title, description }) {
    return (
        <div className="destination-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Book Now</button>
        </div>
    );
}

export default DestinationCard;