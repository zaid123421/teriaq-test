import Logo from '../assets/Images/Logo.svg';
import Link from './Link';
import { RiLinkedinFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
  return(
    <footer className='text-base md:text-lg lg:text-xl flex flex-col items-center justify-center px-2 py-4 md:py-8 bg-[#251f1d]'>
      <img className='w-[100px] h-[100px]' alt='logo' src={Logo} />
      <nav className='w-full'>
        <ul className='text-white mt-5 flex flex-wrap items-center flex-row-reverse justify-center'>
          <Link className="ml-4 mb-2" toPlace="/" label="الرئيسية" />
          <Link className="ml-4 mb-2" toPlace="#most-popular" label="الأصناف الأكثر طلباً" />
          <Link className="ml-4 mb-2" toPlace="#food-list" label="قائمة الطعام" />
          <Link className="ml-4 mb-2" toPlace="#who-us" label="من نحن" />
          <Link className="ml-4 mb-2" label="المقالات" />
          <Link className="ml-4 mb-2" toPlace="#contact-us" label="تواصل معنا" />
        </ul>
      </nav>
      <div className='flex text-white mt-2 md:mt-5'>
        <RiLinkedinFill className='cursor-pointer rounded-3xl border-[1px] border-white p-[6px] text-3xl hover:bg-blue-900 hover:border-blue-900 duration-300' />
        <TiSocialFacebook className='cursor-pointer mx-5 rounded-3xl border-[1px] border-white p-[6px] text-3xl hover:bg-blue-500 hover:border-blue-500 duration-300' />
        <FaTwitter className='cursor-pointer rounded-3xl border-[1px] border-white p-[6px] text-3xl hover:bg-blue-400 hover:border-blue-400 duration-300' />
      </div>
    </footer>
  );
}