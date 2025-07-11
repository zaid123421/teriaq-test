import Header from "../components/Header";

import Logo from "../assets/Images/Logo.svg";
import MealImage from "../assets/Images/mealImage.jpg";
import { meals } from "../data/meals";
import { NavLink, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/MealContext";
import AddButton from "../components/AddButton";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Contact from "../components/Contact";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function MealNotes() {
  const [note, setNote] = useState("");

  const { id } = useParams();
  const { addMeal } = useContext(CartContext);

  const currentMeal = meals.find((meal) => meal.id === parseInt(id));
  const type = currentMeal.type

  function handleClick() {
    const mealWithNote = {
      ...currentMeal,
      notes: note
    };
    addMeal(mealWithNote);
  }

  const filteredMeals = meals.filter((meal) => meal.type === type);

  const showCards = filteredMeals.map((meal, index) => (
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

  return(
    <div className="flex flex-col realtive">
      <Header className="absolute top-0" text="text-white" img={Logo} />
      <section className="w-full h-screen bg-contain">
        <img alt="main_image" src={MealImage} className="w-full h-full"/>
      </section>
      <div style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }} className="container bg-white py-10 px-20 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl text-right">
        <div className="flex justify-between bold-text text-3xl">
          <p className="text-[#22935F]">{currentMeal.price} AED</p>
          <p className="text-[#DD1015]">{currentMeal.name}</p>
        </div>
        <p className="mt-3 text-lg text-gray-400">{currentMeal.meal_ingredients}</p>
        <div className="flex flex-row-reverse items-end justify-between">
          <div className="mt-10">
            <p className="mb-4 text-xl">ملاحظات</p>
            <input
              dir="rtl"
              placeholder="أضف ملاحظاتك على الوجبة واطلبها"
              className="p-3 border-2 border-gray-300 rounded-2xl h-[50px] w-[350px]"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <AddButton onClick={handleClick} />
        </div>
      </div>
      <section className="py-20 flex flex-col items-center">
        <h1 className="text-3xl text-[#22935F] font-bold">أصناف مشابهة</h1>
        <div className="mt-5 container grid grid-cols-4 gap-4 flex flex-wrap justify-center">
          {showCards}
        </div>
        <NavLink to="/" className="my-20 bg-[#22935F] text-white p-4 text-xl rounded-2xl hover:bg-[#1d7d51] duration-300">العودة للصفحة الرئيسية</NavLink>
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
      </section>
      <Footer />
    </div>
  );
}