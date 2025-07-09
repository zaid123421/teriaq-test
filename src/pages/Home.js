import Header from "../components/Header";
import home_image from "../assets/Images/home_image.svg";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ImageComponent from "../components/ImageComponent";
import Map from "../assets/Images/Map.svg";
import { MdLocationOn } from "react-icons/md";
import Logo from '../assets/Images/Logo.svg';
import shawrma from '../assets/Images/shawrma.svg';
import snack from '../assets/Images/snack.svg';
import brosted from '../assets/Images/brosted.svg';
import Title from "../components/Title";
import { meals } from "../data/meals";
import { useContext } from "react";
import { CartContext } from "../context/MealContext";

export default function Home() {
  const { addMeal } = useContext(CartContext);
  
  const showCards = meals.map((meal, index) => (
    <div key={meal.id || index} className="p-4 bg-white shadow-md rounded-md m-2 w-[250px]">
      <img alt="meal_image" src={meal.image} className="w-full h-40 object-cover rounded-md mb-2"/>
      <div className="flex justify-between mb-2">
        <p className="text-gray-600">{meal.price} AED</p>
        <p className="text-lg font-bold">{meal.name}</p>
      </div>
      <button
        onClick={() => addMeal(meal)}
        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
      >
        أضف إلى السلة
      </button>
    </div>
  ));

  return (
    <div>
      <Header className="absolute top-0" text="text-white" img={Logo} />
      <section className="w-full h-screen bg-contain">
        <img className="w-full h-full" alt="home_image" src={home_image} />
        <div className="container text-3xl text-white absolute top-[50%] text-right flex justify-end">
          <p dir="rtl" className="w-[450px] text-right leading-[2]">
            عنوانك للاستمتاع بالنكهة السورية الأصيلة من الشاورما والبروستد والسناك.
          </p>
        </div>
      </section>
      <section className="py-10 bg-gray-200 flex flex-col items-center">
        <div className="flex justify-center bold-text text-xl">
          <div style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }} className="w-[200px] h-[70px] rounded-xl bg-white flex justify-end items-center text-[#DD1015] px-2">
            شاورما
            <img className="w-[50px] h-[50px] ml-2" alt="shawrma" src={shawrma}/>
          </div>
          <div style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }} className="w-[200px] h-[70px] rounded-xl bg-white flex justify-end items-center flex mx-8 px-2">
            بروستد
            <img className="w-[50px] h-[50px] ml-2" alt="shawrma" src={brosted}/>
          </div>
          <div style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }} className="w-[200px] h-[70px] rounded-xl bg-white flex justify-end items-center text-[#22935F] px-2">
            سناك
            <img className="w-[50px] h-[50px] ml-2" alt="shawrma" src={snack}/>
          </div>
        </div>
        <div className="container flex flex-col mt-[100px] items-center justify-center">
          <Title title="الأصناف الأكثر طلباً" />
          <div className="parent bg-red-500 flex flex-wrap justify-center">
            {showCards}
          </div>
        </div>
      </section>
      <section className="p-8 flex flex-col justify-center items-center pt-10 pb-[300px] bg-gray-200">
        <article className="mb-10 w-full flex flex-col items-center">
          <Title title="معرض الصور" />
          <div className="grid-template container w-full">
            <ImageComponent />
          </div>
        </article>
        <article className="relative">
          <div
            style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
            className="bg-white w-[1000px] h-[500px] rounded-2xl p-8 shadow-2xl"
          >
            <Title title="تواصل معنا" />
            <div className="flex justify-center">
              <Contact
                className="mr-2"
                label="مارينا"
                number1="+9714 243956"
                number2="+97156 3773206"
              />
              <Contact
                className="ml-2"
                label="جميرة"
                bg="bg-[#251f1d]"
                number1="+9714 3960610"
                number2="+97150 4402850"
                text="text-white"
              />
            </div>
          </div>
          <div className="w-[900px] absolute bottom-[-50%] left-[50%] translate-x-[-50%]">
            <img alt="map" src={Map} />
            <MdLocationOn className="absolute top-[100px] left-[400px] text-[#DD1015] text-4xl" />
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}
