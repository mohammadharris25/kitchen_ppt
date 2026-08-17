import { useState } from "react";
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

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState({ items: [], total: 0 });
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = (message) => {
    setToast({ message, visible: true });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // When user clicks Checkout in Cart Drawer
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

  return (
    <div className="app">
      {/* ========== NAVBAR ========== */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onAccountClick={() => showToast("Account feature coming soon!")}
      />

      {/* ========== MAIN SECTIONS ========== */}
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

      {/* ========== CART DRAWER ========== */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {/* ========== PAYMENT MODAL ========== */}
      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        total={subtotal}
        onPaymentSuccess={handlePaymentSuccess}
      />

      {/* ========== ORDER SUCCESS ========== */}
      <OrderSuccess
        isOpen={showOrderSuccess}
        onClose={() => setShowOrderSuccess(false)}
        orderItems={lastOrder.items}
        orderTotal={lastOrder.total}
      />

      {/* ========== TOAST ========== */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
}

export default App;
