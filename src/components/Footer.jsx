import "./Footer.css";

const Footer = ({ onjoinClick }) => {
  return (
    <footer className="footer" id="about">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">
            Home<span className="italic">dine</span>
          </h2>
          <p className="tagline">
            Eco-friendly kitchenware crafted for a greener, more thoughtful
            home.
          </p>
          <button className="join-btn" onClick={onjoinClick}>
            Join Us Now
          </button>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <a href="#shop">Drinkware</a>
            <a href="#shop">Tableware</a>
            <a href="#shop">Utensils</a>
            <a href="#bestsellers">Bestsellers</a>
          </div>

          <div className="link-group">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#gallery">Gallery</a>
            <a href="#sustainability">Sustainability</a>
            <a href="#newsletter">Recipes</a>
          </div>

          <div className="link-group">
            <h4>Support</h4>
            <a href="#">Contact</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Homedine. All rights reserved.</p>

        <div className="social-links">
          <a href="#" aria-label="Twitter">
            𝕏
          </a>
          <a href="#" aria-label="Instagram">
            📷
          </a>
          <a href="#" aria-label="LinkedIn">
            in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
