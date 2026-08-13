import "./NewArrival.css";

const NewArrival = ({ onExportClick }) => {
  return (
    <section className="new-arrival">
      <div className="new-arrival-content">
        <div className="new-arrival-text">
          <span className="badge">New Arrival</span>
          <h2>Freshly Crafted for Your Greener Kitchen</h2>
          <p>
            Discover our latest sustainable pieces designed with care for both
            your home and the planet.
          </p>
          <button className="explore-btn" onClick={onExportClick}>
            Explore Collection →
          </button>
        </div>
        <div className="new-arrival-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/077/549/977/small/rustic-kitchenware-flat-lay-cast-iron-pans-wooden-photo.jpg"
            alt="New Arrival Product"
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
