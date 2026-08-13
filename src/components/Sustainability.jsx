import "./Sustainability.css";

const Sustainability = () => {
  return (
    <section className="sustainability">
      <div className="sustainability-images">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80"
          alt="Sustainable kitchenware"
        />
        <img
          src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400&q=80"
          alt="Eco products"
          className="main-img"
        />
        <img
          src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80"
          alt="Natural materials"
        />
      </div>

      <p className="sustainability-text">
        Discover our commitment to <strong>sustainable materials</strong>,
        low-impact production, and{" "}
        <strong>ethical sourcing partnerships</strong> — all crafted to support
        a healthier planet and a{" "}
        <span className="highlight">greener kitchen</span>.
      </p>
    </section>
  );
};

export default Sustainability;
