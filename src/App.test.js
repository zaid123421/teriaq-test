import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { MealsProvider } from "./context/MealContext";

test("renders home page menu section", () => {
  render(
    <BrowserRouter>
      <MealsProvider>
        <Home />
      </MealsProvider>
    </BrowserRouter>
  );

  expect(screen.getByText(/المنيو/i)).toBeInTheDocument();
});
