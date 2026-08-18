import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const productId = String(product.id);

      const existingItem = state.items.find(
        (item) => String(item.id) === productId,
      );

      if (existingItem) {
        // Product already in cart → increase quantity
        return {
          ...state,
          items: state.items.map((item) =>
            String(item.id) === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      // New product → add with quantity 1
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => String(item.id) !== String(action.payload),
        ),
      };

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      const itemId = String(id);

      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => String(item.id) !== itemId),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          String(item.id) === itemId ? { ...item, quantity } : item,
        ),
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    try {
      const saved = localStorage.getItem("homedine-cart");
      return saved ? JSON.parse(saved) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("homedine-cart", JSON.stringify(state));
  }, [state]);

  // Badge shows number of unique products
  const cartCount = state.items.length;

  // Total price
  const subtotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        cartCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
