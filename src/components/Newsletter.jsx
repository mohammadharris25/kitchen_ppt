import "./Newsletter.css";

const Newsletter = ({ onSubscribe }) => {
  const handlesubmit = (e) => {
    e.preventDefault();
    onSubscribe();
  };
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=300&q=80"
            alt="Cookware"
          />
          <img
            src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=300&q=80"
            alt="Kitchen"
          />
        </div>

        <div className="newsletter-center">
          <p className="small-text">Get Recipes</p>
          <h2>10% Off</h2>
          <form className="subscribe-form" onSubmit={handlesubmit}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="form-note">
            Eco-friendly recipes, cooking tips, and a 10% discount on
            sustainable kitchenware.
          </p>
        </div>

        <div className="newsletter-right">
          <img
            src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&q=80"
            alt="Drinkware"
          />
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&q=80"
            alt="Family"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
