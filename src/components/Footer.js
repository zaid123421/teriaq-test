import Logo from '../assets/Images/Logo.svg';
import Link from './Link';
import { RiLinkedinFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
  return(
    <footer className='flex flex-col items-center justify-center py-8 bg-[#251f1d]'>
      <img alt='logo' src={Logo} />
      <nav className='w-full'>
        <ul className='text-white mt-5 flex flex-row-reverse justify-center'>
          <Link toPlace="/" label="الرئيسية" />
          <Link toPlace="#most-popular" label="الأصناف الأكثر طلباً" />
          <Link toPlace="#food-list" label="قائمة الطعام" />
          <Link toPlace="#who-us" label="من نحن" />
          <Link label="المقالات" className={`cursor-pointer`} />
          <Link toPlace="#contact-us" label="تواصل معنا" />
        </ul>
      </nav>
      <div className='flex text-white mt-5'>
        <RiLinkedinFill className='cursor-pointer mr-5 rounded-3xl border-[1px] border-white p-[6px] text-3xl hover:bg-blue-900 hover:border-blue-900 duration-300' />
        <TiSocialFacebook className='cursor-pointer mr-5 rounded-3xl border-[1px] border-white p-[6px] text-3xl hover:bg-blue-500 hover:border-blue-500 duration-300' />
        <FaTwitter className='cursor-pointer mr-5 rounded-3xl border-[1px] border-white p-[6px] text-3xl hover:bg-blue-400 hover:border-blue-400 duration-300' />
      </div>
    </footer>
  );
}