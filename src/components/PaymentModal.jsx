import { useState } from "react";
import "./PaymentModal.css";

const PaymentModal = ({ isOpen, onClose, total, onPaymentSuccess }) => {
  const [method, setMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);

  // Form states
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  if (!isOpen) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="payment-overlay">
      <div className="payment-modal">
        <div className="payment-header">
          <h2>Complete Payment</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="payment-amount">
          Total Amount: <strong>₹{total.toFixed(2)}</strong>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <button
            className={method === "upi" ? "active" : ""}
            onClick={() => setMethod("upi")}
          >
            UPI
          </button>
          <button
            className={method === "card" ? "active" : ""}
            onClick={() => setMethod("card")}
          >
            Credit / Debit Card
          </button>
          <button
            className={method === "netbanking" ? "active" : ""}
            onClick={() => setMethod("netbanking")}
          >
            Net Banking
          </button>
        </div>

        <form onSubmit={handlePayment}>
          {/* UPI Form */}
          {method === "upi" && (
            <div className="form-group">
              <label>UPI ID</label>
              <input
                type="text"
                placeholder="example@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </div>
          )}

          {/* Card Form */}
          {method === "card" && (
            <>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="password"
                    placeholder="123"
                    maxLength="4"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Name on Card</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* Net Banking */}
          {method === "netbanking" && (
            <div className="form-group">
              <label>Select Bank</label>
              <select required>
                <option value="">Choose your bank</option>
                <option>State Bank of India</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>Axis Bank</option>
                <option>Kotak Mahindra Bank</option>
                <option>Punjab National Bank</option>
              </select>
            </div>
          )}

          <button type="submit" className="pay-btn" disabled={processing}>
            {processing ? "Processing Payment..." : `Pay ₹${total.toFixed(2)}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
