import { useRef } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./Bestselling.css";

const Bestselling = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bestselling" id="bestsellers">
      <div className="bestselling-header">
        <div>
          <p className="section-label">Eco Essentials Planet-Friendly</p>
          <h2>
            Bestselling <span className="italic">Products</span>
          </h2>
        </div>
        <a href="#products" className="more-link">
          More products →
        </a>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow-btn left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="products-grid" ref={scrollRef}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="arrow-btn right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Bestselling;
