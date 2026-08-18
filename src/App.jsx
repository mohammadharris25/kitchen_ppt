import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bestselling from "./components/Bestselling";
import BrandBanner from "./components/BrandBanner";
import FeaturePills from "./components/FeaturePills";
import Categories from "./components/Categories";
import NewArrival from "./components/NewArrival";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Sustainability from "./components/Sustainability";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import PaymentModal from "./components/PaymentModal";
import OrderSuccess from "./components/OrderSuccess";
import Toast from "./components/Toast";
import { useCart } from "./context/CartContext";

function App() {
  const { cartCount, items, subtotal, clearCart } = useCart();

  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState({ items: [], total: 0 });
  const [toast, setToast] = useState({ message: "", visible: false });

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message) => {
    setToast({ message, visible: true });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // When user clicks Checkout
  const handleCheckout = () => {
    if (items.length === 0) return;
    setIsCartOpen(false);
    setShowPayment(true);
  };

  // After successful payment
  const handlePaymentSuccess = () => {
    setLastOrder({
      items: [...items],
      total: subtotal,
    });
    clearCart();
    setShowPayment(false);
    setShowOrderSuccess(true);
  };

  // Show Loader first
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onAccountClick={() => showToast("Account feature coming soon!")}
      />

      {/* Main Sections */}
      <Hero onShopClick={() => scrollTo("bestsellers")} />
      <Bestselling />
      <BrandBanner />
      <FeaturePills />

      <Categories
        onCategoryClick={(name) => {
          showToast(Exploring`${name}`);
          scrollTo("bestsellers");
        }}
      />

      <NewArrival onExplore={() => scrollTo("bestsellers")} />
      <Gallery />
      <Reviews />
      <Sustainability />

      <Newsletter onSubscribe={() => showToast("Thanks for subscribing! 🎉")} />

      <Footer onJoin={() => showToast("Welcome to the Homedine family!")} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        total={subtotal}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* Order Success */}
      <OrderSuccess
        isOpen={showOrderSuccess}
        onClose={() => setShowOrderSuccess(false)}
        orderItems={lastOrder.items}
        orderTotal={lastOrder.total}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
}

export default App;
