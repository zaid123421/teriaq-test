import Header from "../components/Header";
import Logo2 from "../assets/Images/Logo2.svg"
import Footer from "../components/Footer";
import { FiShoppingCart } from "react-icons/fi"
import { LuTrash } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ShoppingCart() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if(count > 1) {
      setCount(count - 1);
    }
  }

  return(
    <>
      <Header className="bg-gray-200" text="text-black" img={Logo2} />
      <div className="bg-gray-200 w-full flex flex-col items-center p-10">
        <div className="container bg-white rounded-xl text-right h-fit mb-10 p-12">
          <div className="flex justify-end items-center text-[#22935F]">
            <span className="text-4xl mr-3">السلة</span>
            <FiShoppingCart className='pr-1 text-4xl' />
          </div>
          <div className="flex items-center flex-row-reverse mt-8 justify-between">
            <div>
              <p className="text-[#DD1015] text-3xl">كبة شاورما لحمة</p>
              <p className="text-[#BBBBBB] text-lg">الملاحظات ان وجدت</p>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2" onClick={decrement}>
                <FaMinus className="text-2xl text-gray-300" />
              </button>
                <span className="text-center mx-5 w-[15px] text-xl">{count}</span>
              <button className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2" onClick={increment}>
                <IoMdAdd  className="text-2xl text-[#22935F]" />
              </button>
            </div>
            <div className="text-[#22935F] bold-text text-2xl">
              39 AED
            </div>
            <div className="cursor-pointer">
              <LuTrash className="text-3xl text-gray-400 hover:text-gray-600 duration-300" />
            </div>
          </div>
          <div className="flex items-center flex-row-reverse mt-8 justify-between">
            <div>
              <p className="text-[#DD1015] text-3xl">كبة شاورما لحمة</p>
              <p className="text-[#BBBBBB] text-lg">الملاحظات ان وجدت</p>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2" onClick={decrement}>
                <FaMinus className="text-2xl text-gray-300" />
              </button>
                <span className="text-center mx-5 w-[15px] text-xl">{count}</span>
              <button className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2" onClick={increment}>
                <IoMdAdd className="text-2xl text-[#22935F]" />
              </button>
            </div>
            <div className="text-[#22935F] bold-text text-2xl">
              39 AED
            </div>
            <div className="cursor-pointer">
              <LuTrash className="text-3xl text-gray-400 hover:text-gray-600 duration-300" />
            </div>
          </div>
          <div className="flex items-center flex-row-reverse mt-8 justify-between">
            <div>
              <p className="text-[#DD1015] text-3xl">كبة شاورما لحمة</p>
              <p className="text-[#BBBBBB] text-lg">الملاحظات ان وجدت</p>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2" onClick={decrement}>
                <FaMinus className="text-2xl text-gray-300" />
              </button>
                <span className="text-center mx-5 w-[15px] text-xl">{count}</span>
              <button className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2" onClick={increment}>
                <IoMdAdd  className="text-2xl text-[#22935F]" />
              </button>
            </div>
            <div className="text-[#22935F] bold-text text-2xl">
              39 AED
            </div>
            <div className="cursor-pointer">
              <LuTrash className="text-3xl text-gray-400 hover:text-gray-600 duration-300" />
            </div>
          </div>
        </div>
        <div className="bg-white container rounded-xl flex py-2 px-8 relative">
          <button className="absolute left-0 top-0 h-full bg-[#22935F] text-white rounded-xl flex items-center flex-start w-[400px] justify-center text-2xl hover:bg-[#1c744c] duration-300">
            اطلب الآن
            <FaWhatsapp className="text-3xl ml-3" />
          </button>
          <div className="flex-1 text-right text-xl">
            <div dir="rtl">
              المجموع (
              <span className="text-gray-400 text-lg">السعر غير متضمن الضريبة والتوصيل</span>)
            </div>
            <p className="text-[#22935F] bold-text mt-2">202 AED</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}