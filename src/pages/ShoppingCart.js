import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LuTrash } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { CartContext } from "../context/MealContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo2 from "../assets/Images/Logo2.svg"
import axios from "axios";

export default function ShoppingCart() {
  const { shoppingCart, removeMeal, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const totalPrice = shoppingCart.reduce(
    (total, meal) => total + (meal.price * meal.quantity), 0
  );

  async function Order() {
    try {
      const res = await axios.post("https://fakeUrl",
        {
          meals: shoppingCart,
          price: totalPrice
        },
        { headers: {
          // "Authorization" : token
          }
        }
      );
      console.log("Success");
    } catch {
      console.error("Failure");
    }
  }

  return (
    <>
      <Header text="text-black" className="bg-gray-200" img={Logo2} />
      <div className="bg-gray-200 w-full flex flex-col items-center p-10">
        <div className="container bg-white rounded-xl text-right h-fit mb-10 p-12">
          <div className="flex justify-end items-center text-[#22935F]">
            <span className="text-4xl mr-3">السلة</span>
            <FiShoppingCart className="pr-1 text-4xl" />
          </div>
          {shoppingCart.length === 0 && (
            <p dir="rtl" className="text-center text-xl mt-10 text-gray-500">لا يوجد عناصر في السلة</p>
          )}
          {shoppingCart.map((meal, index) => (
            <div
              key={index}
              className="flex items-center flex-row-reverse mt-8 justify-between"
            >
              <div>
                <p className="text-[#DD1015] text-3xl">{meal.name}</p>
                <p className="text-[#BBBBBB] text-lg w-[200px]">
                  {meal.notes ? meal.notes : "الملاحظات ان وجدت"}
                </p>
              </div>

              <div className="flex items-center">
                <button
                  className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2"
                  onClick={() => decrementQuantity(index)}
                >
                  <FaMinus className="text-2xl text-gray-300" />
                </button>

                <span className="flex justify-center text-center mx-5 w-[15px] text-xl">
                  {meal.quantity || 1}
                </span>

                <button
                  className="bg-gray-100 hover:bg-gray-200 duration-300 rounded-full p-2"
                  onClick={() => incrementQuantity(index)}
                >
                  <IoMdAdd className="text-2xl text-[#22935F]" />
                </button>
              </div>

              <div className="text-[#22935F] bold-text text-2xl w-[150px]">
                {(meal.price * (meal.quantity || 1)).toFixed(0)} AED
              </div>

              <div className="cursor-pointer" onClick={() => removeMeal(index)}>
                <LuTrash className="text-3xl text-gray-400 hover:text-gray-600 duration-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white container rounded-xl flex py-2 px-8 relative">
          <button onClick={Order} className="absolute left-0 top-0 h-full bg-[#22935F] text-white rounded-xl flex items-center flex-start w-[400px] justify-center text-2xl hover:bg-[#1c744c] duration-300">
            اطلب الآن
            <FaWhatsapp className="text-3xl ml-3" />
          </button>
          <div className="flex-1 text-right text-xl">
            <div dir="rtl">
              المجموع (
              <span className="text-gray-400 text-lg">السعر غير متضمن الضريبة والتوصيل</span>)
            </div>
            <p className="text-[#22935F] bold-text mt-2">{totalPrice.toFixed(0)} AED</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
