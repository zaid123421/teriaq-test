import { useContext, useMemo } from "react";
import { CartStateContext, CartDispatchContext } from "../context/MealContext";

export function useCartState() {
  return useContext(CartStateContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export function useCart() {
  const state = useCartState();
  const dispatch = useCartDispatch();
  return useMemo(() => ({ ...state, ...dispatch }), [state, dispatch]);
}
