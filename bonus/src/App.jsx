import DestinationCard from "./DestinationCard";

function App() {
    return (
        <div className="destination-grid">
            <DestinationCard
                image="../public/beach.jpg"
                title="Beach Paradise"
                description="Relax on the sandy shores and soak up the sun."/>
            <DestinationCard
                image="../public/city.jpg"
                title="City Explorer"
                description="Discover the vibrant streets and rich culture of bustling cities."/>
            <DestinationCard
                image="../public/mountains.jpg"
                title="Mountain Adventure"
                description="Experience the breathtaking beauty of towering peaks and serene alpine lakes."/>
        </div>
    );
}

export default App;