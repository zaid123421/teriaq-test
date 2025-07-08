import Logo from '../assets/Images/Logo.svg';
import { FiShoppingCart } from "react-icons/fi"
import Link from './Link';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return(
    <header className='absolute top-0 w-full px-10 py-5 text-xl'>
      <nav className='flex items-center justify-between'>
        <img alt='Logo' src={Logo} />
        <ul className='flex flex-row-reverse items-center text-white'>
          <Link toPlace="/" label="الرئيسية" />
          <Link toPlace="/wre2" label="من نحن" />
          <Link toPlace="/3vwer" label="الأصناف الأكثر طلباً" />
          <Link toPlace="/vfvwe" label="قائمة الطعام" />
          <Link toPlace="/vwer5" label="CONTACT US" className='bg-[#DD1015] hover:bg-red-800 duration-300 py-3 px-5 rounded-[10px]' />
          <NavLink to="/shopping-cart" className={({ isActive }) => `${isActive ? `border-red-500`: ``} pb-2 border-1`}>
            <FiShoppingCart className='pr-1 text-2xl' />
          </NavLink>
          <button className='ml-7 cursor-pointer'>EN</button>
        </ul>
      </nav>
    </header>
  );
}