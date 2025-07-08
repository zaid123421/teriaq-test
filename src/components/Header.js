import Logo from '../assets/Images/Logo.svg';
import Logo2 from "../assets/Images/Logo2.svg"
import { FiShoppingCart } from "react-icons/fi"
import Link from './Link';
import { NavLink } from 'react-router-dom';

export default function Header({ img, text, className }) {
  return(
    <header className={`w-full px-10 py-5 text-xl ${className}`}>
      <nav className='flex items-center justify-between'>
        <img alt='Logo' src={img} />
        <ul className={`flex flex-row-reverse items-center ${text}`}>
          <Link toPlace="/" label="الرئيسية" />
          <Link toPlace="/wre2" label="من نحن" />
          <Link toPlace="/3vwer" label="الأصناف الأكثر طلباً" />
          <Link toPlace="/vfvwe" label="قائمة الطعام" />
          <Link toPlace="/vwer5" label="CONTACT US" className='text-white bg-[#DD1015] hover:bg-red-800 duration-300 py-3 px-5 rounded-[10px]' />
          <NavLink to="/shopping-cart" className={({ isActive }) => `ml-5 pb-2 border-b-[3px] ${isActive ? `border-[#DD1015]`: `border-b-transparent`}`}>
            <FiShoppingCart className='pr-1 text-2xl' />
          </NavLink>
          <button className='ml-7 cursor-pointer'>EN</button>
        </ul>
      </nav>
    </header>
  );
}