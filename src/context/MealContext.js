import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();
export const CartContext = createContext();

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("shoppingCart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export const MealsProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(loadCartFromStorage);
  const saveTimeoutRef = useRef(null);

  useEffect(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      } catch {
        // ignore storage errors
      }
    }, 300);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [shoppingCart]);

  const removeMeal = useCallback((removeIndex) => {
    setShoppingCart((prev) => prev.filter((_, index) => index !== removeIndex));
  }, []);

  const addMeal = useCallback((meal) => {
    setShoppingCart((prev) => {
      const existingIndex = prev.findIndex((m) => m.id === meal.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        updated[existingIndex] = {
          ...existing,
          quantity: (existing.quantity || 1) + 1,
        };
        return updated;
      }
      return [...prev, { ...meal, quantity: 1 }];
    });
  }, []);

  const incrementQuantity = useCallback((index) => {
    setShoppingCart((prev) => {
      const updated = [...prev];
      const item = updated[index];
      updated[index] = {
        ...item,
        quantity: (item.quantity || 1) + 1,
      };
      return updated;
    });
  }, []);

  const decrementQuantity = useCallback((index) => {
    setShoppingCart((prev) => {
      const updated = [...prev];
      const item = updated[index];
      if ((item.quantity || 1) > 1) {
        updated[index] = {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return updated;
    });
  }, []);

  const stateValue = useMemo(
    () => ({ shoppingCart, cartCount: shoppingCart.length }),
    [shoppingCart]
  );

  const dispatchValue = useMemo(
    () => ({ addMeal, removeMeal, incrementQuantity, decrementQuantity }),
    [addMeal, removeMeal, incrementQuantity, decrementQuantity]
  );

  const legacyValue = useMemo(
    () => ({ ...stateValue, ...dispatchValue }),
    [stateValue, dispatchValue]
  );

  return (
    <CartStateContext.Provider value={stateValue}>
      <CartDispatchContext.Provider value={dispatchValue}>
        <CartContext.Provider value={legacyValue}>
          {children}
        </CartContext.Provider>
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
