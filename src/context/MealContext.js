import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const MealsProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(() => {
    const saved = localStorage.getItem("shoppingCart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const removeMeal = (removeIndex) => {
    setShoppingCart((prev) => prev.filter((_, index) => index !== removeIndex));
  };

  const addMeal = (meal) => {
    setShoppingCart((prev) => {
      const existingIndex = prev.findIndex((m) => m.id === meal.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        return updated;
      } else {
        return [...prev, { ...meal, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (index) => {
    setShoppingCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = (updated[index].quantity || 1) + 1;
      return updated;
    });
  };

  const decrementQuantity = (index) => {
    setShoppingCart((prev) => {
      const updated = [...prev];
      if ((updated[index].quantity || 1) > 1) {
        updated[index].quantity -= 1;
      }
      return updated;
    });
  };

  return (
    <CartContext.Provider value={{ shoppingCart, addMeal, removeMeal, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
