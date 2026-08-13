import { useRef } from "react";
import "./Gallery.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
  "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&q=80",
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
  "https://t3.ftcdn.net/jpg/00/63/25/12/360_F_63251258_XMxdxQWrRiv3eY4VatQY5iDwV7lrOiPm.jpg",
  "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&q=80",
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <h2>
          Thoughtful, Planet-Prioritizing Ideas and Inspiration ·{" "}
          <span className="italic">Gallery</span>
        </h2>
      </div>

      <div className="gallery-wrapper">
        <button className="gallery-arrow left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="gallery-track" ref={scrollRef}>
          {galleryImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="gallery-arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Gallery;
