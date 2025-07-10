import { FiShoppingCart } from "react-icons/fi"
import Link from './Link';
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { useContext, useState } from "react";
import { CartContext } from "../context/MealContext";

export default function Header({ img, text, className }) {
  const [active, setActive] = useState(false);

  const shoppingCart = useContext(CartContext);

  function handleClick() {
    setActive(!active);
    console.log(active);
  }

  return(
    <header className={`w-full px-5 py-10 md:py-5 text-base md:text-lg lg:text-xl ${className}`}>
      <nav className='flex items-center justify-between'>
        <img className="md:mr-[10px] hidden md:block" alt='Logo' src={img} />
        <div className="flex flex-row-reverse items-center justify-between">
          <ul className={`md:flex flex-row-reverse text-center items-center ${text} ${active ? `py-5 rounded-2xl bg-gray-500 flex flex-col w-full absolute top-[100%] left-0` : `hidden`}`}>
            <Link className="mb-2 md:ml-4" toPlace="/" label="الرئيسية" />
            <Link className="mb-2 md:ml-4" toPlace="#who-us" label="من نحن" />
            <Link className="mb-2 md:ml-4" toPlace="#most-popular" label="الأصناف الأكثر طلباً" />
            <Link className="mb-2 md:ml-4" toPlace="#food-list" label="قائمة الطعام" />
            <Link toPlace="#contact-us"
            label="CONTACT US"
            className='
            md:ml-4
            text-white
            md:bg-[#DD1015]
            md:hover:border-transparent
            md:hover:bg-red-800
            duration-300
            md:p-2
            lg:py-3
            lg:px-5
            md:rounded-2xl
            mb-0'
            />
          </ul>
          <NavLink to="/shopping-cart" className={({ isActive }) => `relative border-b-2 border-transparent hover:border-[#DD1015] duration-300 ml-5 pb-2 ${isActive ? `border-[#DD1015]`: `border-b-transparent`} ${text}`}>
            <FiShoppingCart className='text-xl md:text-2xl mr-2' />
            <span className={`bold-text flex items-center justify-center absolute top-[-10px] right-[-8px] w-[20px] h-[20px] rounded-full bg-white text-xs text-black`}>
              {shoppingCart.shoppingCart.length}
            </span>
          </NavLink>
          <button className={`${text} 'ml-7 pb-2`}>EN</button>
        </div>
        <div className="md:hidden pb-2">
          <FaBarsStaggered onClick={handleClick} className={`hover:text-[#DD1015] cursor-pointer duration-300 ${text}`} />
        </div>
      </nav>
    </header>
  );
}