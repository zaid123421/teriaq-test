import Header from "../components/Header";
import home_image from "../assets/Images/home_image.svg";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Map from "../assets/Images/Map.svg";
import { MdLocationOn } from "react-icons/md";
import Logo from '../assets/Images/Logo.svg';
import shawrma from '../assets/Images/shawrma.svg'
import snack from '../assets/Images/snack.svg'
import brosted from '../assets/Images/brosted.svg'
import Title from "../components/Title";
import food1 from "../assets/Images/1.svg"
import food2 from "../assets/Images/2.svg"
import food3 from "../assets/Images/3.svg"
import food4 from "../assets/Images/4.svg"
import food5 from "../assets/Images/5.svg"
import food6 from "../assets/Images/6.svg"
import ImageComponent from "../components/ImageComponent";

export default function Home() {
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
        </div>
      </section>
      <section className="p-8 flex flex-col justify-center items-center pt-10 pb-[300px] bg-gray-200">
        <article className="mb-10 w-full flex flex-col items-center">
          <Title title="معرض الصور" />
          <div className="grid-template container w-full">
            <ImageComponent imgSrc={food1} />
            <ImageComponent imgSrc={food2} />
            <ImageComponent imgSrc={food3} />
            <ImageComponent imgSrc={food4} />
            <ImageComponent imgSrc={food5} />
            <ImageComponent imgSrc={food6} />
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
