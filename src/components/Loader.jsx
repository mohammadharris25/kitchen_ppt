import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <h1 className="loader-logo">
          Home<span>dine</span>
        </h1>
        <div className="loader-spinner"></div>
        <p>Loading eco-friendly experience...</p>
      </div>
    </div>
  );
};

export default Loader;
