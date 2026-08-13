import "./Reviews.css";

const reviews = [
  {
    id: 1,
    text: "HomeDine's glass jars are awesome for storage, and the bamboo utensils are perfect for daily use!",
    name: "Jane Cooper",
    role: "Nutritionist",
  },
  {
    id: 2,
    text: "Fantastic products and fast delivery. My kitchen feels so much greener!",
    name: "Darlene Robertson",
    role: "Culinary Instructor",
  },
  {
    id: 3,
    text: "Love HomeDine's eco-style! Glass jars keep things fresh, and bamboo utensils are so chic.",
    name: "Jacob Jones",
    role: "Food Blogger",
  },
  {
    id: 4,
    text: "The sustainable bamboo utensils are perfect for daily use.",
    name: "Esther Howard",
    role: "Sous Chef",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews-header">
        <h2>
          <span className="rating">4.9/5</span> · More than 25,000 5-Star
          Reviews
        </h2>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <p className="quote">“{review.text}”</p>
            <div className="reviewer">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
