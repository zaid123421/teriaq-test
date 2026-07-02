export function getCartTotalPrice(shoppingCart) {
  return shoppingCart.reduce(
    (total, meal) => total + meal.price * (meal.quantity || 1),
    0
  );
}

export function createCartMealIdSet(shoppingCart) {
  return new Set(shoppingCart.map((item) => item.id));
}
