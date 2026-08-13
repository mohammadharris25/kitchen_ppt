import "./OrderSuccess.css";

const OrderSuccess = ({ isOpen, onClose, orderItems, orderTotal }) => {
  if (!isOpen) return null;

  return (
    <div className="order-overlay">
      <div className="order-modal">
        <div className="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p className="success-message">
          Thank you for shopping with Homedine. Your eco-friendly products are
          on the way.
        </p>

        <div className="order-summary">
          <h4>Order Summary</h4>
          {orderItems.map((item) => (
            <div className="order-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="order-total">
            <strong>Total</strong>
            <strong>${orderTotal.toFixed(2)}</strong>
          </div>
        </div>

        <button className="continue-btn" onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
