import Title from "../components/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ImageComponent from "../components/ImageComponent";

import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import { meals } from "../data/meals";

import { useContext, useState } from "react";
import { CartContext } from "../context/MealContext";

import Map from "../assets/Images/Map.svg";
import Logo from "../assets/Images/Logo.svg";
import shawrma from "../assets/Images/shawrma.svg";
import snack from "../assets/Images/snack.svg";
import brosted from "../assets/Images/brosted.svg";
import home_image from "../assets/Images/home_image.jpg";
import person from "../assets/Images/person.jpg";
import img1 from "../assets/Images/1.jpg";
import img2 from "../assets/Images/2.jpg";
import img3 from "../assets/Images/3.jpg";
import img4 from "../assets/Images/4.jpg";
import img5 from "../assets/Images/5.jpg";
import img6 from "../assets/Images/6.jpg";

import { NavLink } from "react-router-dom";
import AddButton from "../components/AddButton";


export default function Home() {
  const { addMeal } = useContext(CartContext);

  const showCards = meals.map((meal, index) => (
    <div key={index} className="bg-white shadow-md rounded-2xl">
      <img
        alt="meal_image"
        src={meal.image}
        className="w-full h-[250px] object-cover rounded-t-2xl mb-2"
      />
      <div className="p-4 text-xl font-bold text-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#DD1015]">{meal.price} AED</p>
          <p className="text-lg">{meal.name}</p>
        </div>
        <div className="flex items-center justify-between">
          <AddButton onClick={() => addMeal(meal)} />
          <NavLink to={`/meal-notes/${meal.id}`} className="text-black font-light text-lg">المزيد</NavLink>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) =>
              i < meal.rate ? (
                <FaStar key={i} className="text-[#EFC101] mr-1" />
              ) : (
                <FaRegStar key={i} className="text-[#EFC101] mr-1" />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  ));

  const [selectedType, setSelectedType] = useState("");

  const filteredMeals =
    selectedType === ""
      ? meals
      : meals.filter((meal) => meal.type === selectedType);

  return (
    <div>
      <Header className="absolute top-0" text="text-white" img={Logo} />

      <section id="main" className="w-full h-screen bg-contain">
        <img className="w-full h-full" alt="home_image" src={home_image} />
        <div className="container text-3xl text-white absolute top-[50%] text-right flex justify-end">
          <p dir="rtl" className="w-[450px] text-right leading-[2]">
            عنوانك للاستمتاع بالنكهة السورية الأصيلة من الشاورما والبروستد
            والسناك.
          </p>
        </div>
      </section>

      <section id="most-popular" className="py-12 bg-gray-200 flex flex-col items-center">
        <article className="flex justify-center bold-text text-xl">
          <div
            style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
            className="w-[250px] h-[70px] rounded-xl bg-white flex justify-end items-center text-[#DD1015] px-2"
          >
            شاورما
            <img
              className="w-[50px] h-[50px] ml-2"
              alt="shawrma"
              src={shawrma}
            />
          </div>
          <div
            style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
            className="w-[250px] h-[70px] rounded-xl bg-white flex justify-end items-center flex mx-8 px-2"
          >
            بروستد
            <img
              className="w-[50px] h-[50px] ml-2"
              alt="shawrma"
              src={brosted}
            />
          </div>
          <div
            style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
            className="w-[250px] h-[70px] rounded-xl bg-white flex justify-end items-center text-[#22935F] px-2"
          >
            سناك
            <img className="w-[50px] h-[50px] ml-2" alt="shawrma" src={snack} />
          </div>
        </article>
        <article className="container flex flex-col mt-[100px] items-center justify-center">
          <Title title="الأصناف الأكثر طلباً" />
          <div className="container grid grid-cols-4 gap-4 flex flex-wrap justify-center">
            {showCards}
          </div>
        </article>
      </section>

      <section id="food-list" className="py-12 bg-black flex flex-col items-center">
        <Title title="المنيو" className="text-white" />
        <article className="container flex justify-end gap-4 bold-text text-xl py-10">
          {[
            { label: "السندويش", value: "sn" },
            { label: "البروستد", value: "br" },
            { label: "الشاورما", value: "sh" },
            { label: "جميع الأصناف", value: "" },
          ].map((obj) => (
            <button
              key={obj.value}
              onClick={() => setSelectedType(obj.value)}
              className={`px-4 py-2 rounded-2xl hover:bg-white hover:text-red-500 duration-300 ${
                selectedType === obj.value
                  ? "bg-white text-red-500"
                  : "bg-transparent text-white "
              }`}
            >
              {obj.label}
            </button>
          ))}
        </article>
        <div className="container grid grid-cols-4 gap-4 bold-text text-xl">
          {filteredMeals.map((meal) => (
            <div key={meal.id} className="rounded-2xl">
              <img
                src={meal.image}
                alt="meal_image"
                className="w-full h-[250px] object-cover rounded-t-2xl"
              />
              <div className="flex flex-col bg-white p-5 rounded-b-2xl">
                <div className="flex justify-between mb-2 items-center">
                  <p className=" text-[#DD1015]">{meal.price} AED</p>
                  <p className="">{meal.name}</p>
                </div>
                <div className="flex justify-between">
                  <AddButton onClick={() => addMeal(meal)} />
                  <NavLink to={`/meal-notes/${meal.id}`} className="text-black font-light text-lg">المزيد</NavLink>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < meal.rate ? (
                        <FaStar key={i} className="text-[#EFC101] mr-1" />
                      ) : (
                        <FaRegStar key={i} className="text-[#EFC101] mr-1" />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <article id="who-us" className="container flex mt-[100px] min-h-[500px] rounded-2xl bg-[#251F1D]">
          <div className="w-1/2">
            <img
              alt="person"
              src={person}
              className="rounded-tl-2xl rounded-bl-2xl w-full h-full object-fill"
            />
          </div>
          <div className="bg-trannsparent text-white text-right p-10 w-1/2">
            <h1 className="text-4xl mb-8">عن سندويشتي</h1>
            <p
              dir="rtl"
              className="text-white text-justify text-2xl leading-[1.75]"
            >
              المطعم هو مكان مخصص لإعداد وتقديم الطعام والوجبات للزبائن، ويعد من
              أهم المنشآت في قطاع الضيافة. يقدم المطعم تشكيلة متنوعة من الأطباق
              التي قد تكون محلية تقليدية أو عالمية، ويتم إعدادها بواسطة طهاة
              محترفين. يمكن للزبائن الجلوس وتناول الطعام في أجواء مريحة ومصممة
              خصيصا لتوفير تجربة تناول ممتعة. يحرص المطعم على تقديم خدمات راقية
              تشمل جودة الطعام، النظافة، وحسن التعامل مع الزبائن. وتختلف أنواع
              المطاعم ما بين الفاخرة، والعائلية، والسريعة، ولكل منها طابعه
              المميز في طريقة التقديم ونوعية الوجبات.
            </p>
          </div>
        </article>
      </section>

      <section className="pt-10 pb-[300px] flex flex-col items-center bg-gray-200">
        <article className="container mb-12">
          <Title title="معرض الصور" />
          <article className="grid-template pt-10">
            <ImageComponent imgSrc={img1} />
            <ImageComponent imgSrc={img2} />
            <ImageComponent imgSrc={img3} />
            <ImageComponent imgSrc={img4} />
            <ImageComponent imgSrc={img5} />
            <ImageComponent imgSrc={img6} />
          </article>
        </article>
        <article id="contact-us" className="container relative w-full">
          <div
            style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
            className="bg-white w-full h-[500px] rounded-2xl p-8 shadow-2xl"
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
