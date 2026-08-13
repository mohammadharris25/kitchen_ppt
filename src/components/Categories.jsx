import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "CupEco",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
  },
  {
    id: 2,
    name: "EcoSpoonery",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&q=80",
  },
  {
    id: 3,
    name: "NatureSip",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=500&q=80",
  },
  {
    id: 4,
    name: "FreshPitcher",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
  },
];

const Categories = ({ onShopClick }) => {
  return (
    <section className="categories" id="shop">
      <div className="categories-header">
        <h2>
          Explore our thoughtful and <br />
          planet-first <span className="italic">Categories</span>
        </h2>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.image} alt={cat.name} />
            <div className="category-info">
              <h3>Explore {cat.name}</h3>
              <button
                className="shop-btn"
                onClick={() => onShopClick(cat.name)}
              >
                Shop →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
