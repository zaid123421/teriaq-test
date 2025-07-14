// icons
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi"
import { CartContext } from "../context/MealContext";
import { NavLink } from "react-router-dom";

export default function CartComponent() {
  const shoppingCart = useContext(CartContext);

  return(
    <NavLink style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }} to="/shopping-cart" className="flex items-center justify-center bg-red-500 fixed bottom-[5%] left-[5%] w-[50px] h-[50px] rounded-full">
      <FiShoppingCart className='text-xl md:text-2xl text-white mr-2' />
      <span className="bold-text flex items-center justify-center absolute top-[-5px] right-[-5px] w-[25px] h-[25px] rounded-full bg-white text-xs text-black">
        {shoppingCart.shoppingCart.length}
      </span>
    </NavLink>
  );
}