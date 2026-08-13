import "./FeaturePills.css";

const features = [
  { icon: "🌿", title: "Natural Finish" },
  { icon: "♻️", title: "Eco Innovation" },
  { icon: "🌍", title: "Sustainable Materials" },
];

const FeaturePills = () => {
  return (
    <section className="feature-pills">
      {features.map((item, index) => (
        <div className="pill" key={index}>
          <span className="pill-icon">{item.icon}</span>
          <span className="pill-title">{item.title}</span>
        </div>
      ))}
    </section>
  );
};

export default FeaturePills;
