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
import OrderSuccess from "./components/OrderSuccess";
import Toast from "./components/Toast";
import { useCart } from "./context/CartContext";

function App() {
  const { cartCount, items, subtotal, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState({ items: [], total: 0 });
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = (msg) => setToast({ message: msg, visible: true });

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Save order details before clearing
    setLastOrder({
      items: [...items],
      total: subtotal,
    });

    clearCart(); // Clear the cart
    setIsCartOpen(false); // Close drawer
    setShowOrderSuccess(true); // Show success modal
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onAccountClick={() => showToast("Account feature coming soon!")}
      />

      <Hero
        onShopClick={() =>
          document
            .getElementById("bestsellers")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Bestselling />
      <BrandBanner />
      <FeaturePills />
      <Categories
        onCategoryClick={(name) => {
          showToast(`Exploring ${name}`);
          document
            .getElementById("bestsellers")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <NewArrival
        onExplore={() =>
          document
            .getElementById("bestsellers")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Gallery />
      <Reviews />
      <Sustainability />
      <Newsletter onSubscribe={() => showToast("Thanks for subscribing! 🎉")} />
      <Footer onJoin={() => showToast("Welcome to the Homedine family!")} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <OrderSuccess
        isOpen={showOrderSuccess}
        onClose={() => setShowOrderSuccess(false)}
        orderItems={lastOrder.items}
        orderTotal={lastOrder.total}
      />

      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
}

export default App;
