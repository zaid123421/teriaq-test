import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const MealNotes = lazy(() => import("./pages/MealNotes"));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal-notes" element={<MealNotes />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </Suspense>
  );
}
