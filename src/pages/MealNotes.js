// import coponents
import Header from "../components/Header";
import AddButton from "../components/AddButton";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Contact from "../components/Contact";

// import icons
import { FaStar, FaCheckCircle, FaRegStar } from "react-icons/fa";

//import data
import { meals } from "../data/meals";

// import hooks
import { useContext, useEffect, useState } from "react";

// import react-router-dom some tools
import { NavLink, useLocation } from "react-router-dom";

// import CartContext context
import { CartContext } from "../context/MealContext";

// import images
import Logo from "../assets/Images/Logo.svg";
import MealImage from "../assets/Images/mealImage.jpg";
import CartComponent from "../components/CartComponent";
import Modal from "../components/Modal";

export default function MealNotes() {
  // use Hooks
  const [note, setNote] = useState("");
  // const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const { addMeal, shoppingCart } = useContext(CartContext);
  const { pathname } = useLocation();
  const [successBox, setSuccessBox] = useState(false);

  // Variables
  const currentMeal = meals.find((meal) => meal.id === parseInt(id));
  const type = currentMeal.type

  // filter data according to the type of the currents meal
  const filteredMeals = meals.filter((meal) => meal.type === type);

  // use meal data to show in box
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
          <div className="flex items-center">
            <AddButton className = {`${isMealInCart(meal) ? "bg-white text-black" : "bg-black text-white"}`} onClick={() => addMeal(meal)}>
              {isMealInCart(meal) ? "مضاف للسلة" : "أضف للسلة"}
            </AddButton>
            <NavLink
              to="/"
              className="ml-1 md:ml-2 text-black font-light text-sm border-2 border-[#22935F] hover:bg-transparent hover:text-black duration-300 bg-[#22935F] text-white rounded-full p-2"
            >
              المزيد
            </NavLink>
          </div>
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

  // useEffect
  useEffect(() => {
  window.scrollTo({
    top: 0,
  });
  }, [pathname]);

  // functions
  function handleClick() {
    const mealWithNote = {
      ...currentMeal,
      notes: note
    };
    addMeal(mealWithNote);
    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000)
  }

  function isMealInCart(meal) {
  return shoppingCart.some((item) => item.id === meal.id);
  }

  return(
    <div className="flex flex-col items-center realtive">
      <Header ul="top-[100%]" className="absolute top-0" text="text-white" img={Logo} />
      
      <section className="w-full h-screen bg-contain">
        <img alt="main_image" src={MealImage} className="w-full h-full"/>
      </section>

      <div className="p-2 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="container bg-white p-7 lg:py-10 lg:px-20 rounded-2xl text-center md:text-right"
          style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}>
            <div className="flex flex-col-reverse md:flex-row justify-between bold-text text-3xl">
              <p className="text-[#22935F]">{currentMeal.price} AED</p>
              <p className="text-[#DD1015]">{currentMeal.name}</p>
            </div>
            <p className="mt-3 text-lg text-gray-400 text-wrap">{currentMeal.meal_ingredients}</p>
            <div className="flex flex-col items-center md:flex-row-reverse md:items-end md:justify-between">
              <div className="ml-2 mt-10 mb-5 md:mb-0">
                <p className="mb-4 text-xl">ملاحظات</p>
                <input
                  dir="rtl"
                  placeholder="أضف ملاحظاتك على الوجبة"
                  className="p-3 border-2 border-gray-300 rounded-2xl h-[50px] max-w-[350px]"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            <AddButton className = {`${isMealInCart(currentMeal) ? "bg-white text-black" : "bg-black text-white"}`} onClick={handleClick}>
              {isMealInCart(currentMeal) ? "مضاف للسلة" : "أضف للسلة"}
            </AddButton>
            </div>
        </div>
      </div>

      <section className="py-20 flex flex-col items-center">
        <h1 className="text-3xl text-[#22935F] font-bold">أصناف مشابهة</h1>
        <div className="px-2 md:px-0 mt-5 container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 flex flex-wrap justify-center">
          {showCards}
        </div>
        <NavLink to="/" className="my-20 bg-[#22935F] text-white p-4 text-xl rounded-2xl hover:bg-[#1d7d51] duration-300">العودة للصفحة الرئيسية</NavLink>
        <Title title="تواصل معنا" />
        <div className="flex flex-col md:flex-row justify-center">
          <Contact
            className="mr-0 md:mr-2 mb-5 md:mb-0"
            label="مارينا"
            number1="+9714 243956"
            number2="+97156 3773206"
          />
          <Contact
            className="ml-0 md:ml-2"
            label="جميرة"
            bg="bg-[#251f1d]"
            number1="+9714 3960610"
            number2="+97150 4402850"
            text="text-white"
          />
        </div>
      </section>

        <CartComponent />

        <Modal successBox = {successBox} icon={<FaCheckCircle className="text-green-500 mr-2" />}>
          تم إضافة الوجبة للسلة بنجاح
        </Modal>

      <Footer />
    </div>
  );
}