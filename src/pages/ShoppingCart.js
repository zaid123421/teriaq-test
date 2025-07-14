// import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// import icons
import { FaCheckCircle, FaMinus, FaWhatsapp } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LuTrash } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


// import hooks
import { useContext, useEffect, useState } from "react";

// import CartContext context
import { CartContext } from "../context/MealContext";

// import images
import Logo2 from "../assets/Images/Logo2.svg"
import deleteConfirm from "../assets/Images/deleteConfirm.jpg";

// import axios library
import axios from "axios";
import Modal from "../components/Modal";

export default function ShoppingCart() {
  // use Hooks
  const { shoppingCart, removeMeal, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [confirmBox, setConfirmBox] = useState(false);
  const [i, setI] = useState(null);
  const [successBox, setSuccessBox] = useState(false);

  // calculate the total price
  const totalPrice = shoppingCart.reduce(
    (total, meal) => total + (meal.price * meal.quantity), 0
  );

  // useEffect
  useEffect(() => {
  if (confirmBox) {
    document.body.style.overflow = "hidden"; 
  } else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";  
  };
}, [confirmBox]);

  // functions
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

  function remove() {
    removeMeal(i);
    setConfirmBox(false);
    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000)
  }

  function handleDeleteClick(index) {
    setI(index);
    setConfirmBox(true);
  }

  return (
    <>
      <Header ul="top-[15%] text-white" className="bg-gray-200" img={Logo2} />
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
            <div key={index} className="flex items-center flex-col text-center md:text-right md:flex-row-reverse pt-8 md:mb-0 justify-between">
              <div className="mb-5 md:mb-0">
                <p className="text-[#DD1015] text-3xl">{meal.name}</p>
                <p className="text-[#BBBBBB] text-lg w-[200px]">
                  {meal.notes ? meal.notes : null}
                </p>
              </div>
              <div className="flex items-center mb-5 md:mb-0">
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
              <div className="text-[#22935F] bold-text text-2xl w-[150px] mb-5 md:mb-0">
                {(meal.price * (meal.quantity || 1)).toFixed(0)} AED
              </div>
              <div className="cursor-pointer" onClick={() => handleDeleteClick(index)}>
                <LuTrash className="text-3xl text-gray-400 hover:text-gray-600 duration-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white container rounded-xl flex relative">
          <div className="flex flex-col-reverse md:flex-row w-full">
            <button onClick={Order} className="flex items-center justify-center bg-[#22935F] hover:bg-[#1c744c] duration-300 text-white rounded-xl md:w-[400px] text-lg md:text-2xl h-[50px] md:h-full w-full">
              اطلب الآن
              <FaWhatsapp className="text-3xl ml-3" />
            </button>
            <div className="flex-1 text-center md:text-right text-xl py-2 px-8 rounded-xl">
              <div dir="rtl">
                المجموع (
                <span className="text-gray-400 text-lg">السعر غير متضمن الضريبة والتوصيل</span>)
              </div>
              <p className="text-[#22935F] bold-text mt-2">{totalPrice.toFixed(0)} AED</p>
            </div>
          </div>
        </div>
      </div>
      {
        confirmBox &&
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-2">
          <div className="bg-white rounded-xl p-5 text-xl flex flex-col items-center shadow-xl">
            <img alt="image_delete" src={deleteConfirm} className="w-[200px]"/>
            <p className="my-5 text-center md:text-right">هل تريد حقاً حذف الوجبة من سلة المشتريات ؟</p>
            <div className="flex justify-between w-full">
              <button className="bg-[#DD1015] border-2 border-[#DD1015] p-2 rounded-xl text-white hover:bg-transparent hover:text-black duration-300" onClick={() => remove(i)}>حذف</button>
              <button className="bg-[#9e9e9e] border-2 border-[#9e9e9e] p-2 rounded-xl text-white hover:bg-transparent hover:text-black duration-300" onClick={() => setConfirmBox(false)}>تراجع</button>
            </div>
          </div>
        </div>
      }
      <Modal successBox = {successBox} icon={<MdDelete className="text-[#DD1015] mr-2" />}>
        تم حذف الوجبة من السلة بنجاح
      </Modal>
      <Footer />
    </>
  );
}
