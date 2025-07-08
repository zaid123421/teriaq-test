import Header from "../components/Header";
import home_image from "../assets/Images/home_image.svg";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Map from "../assets/Images/Map.svg";
import { MdLocationOn } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="w-full h-screen bg-contain">
        <img className="w-full" alt="home_image" src={home_image} />
        <div className="container text-3xl text-white absolute top-[50%] text-right">
          مرحبا
        </div>
      </section>
      <section className="p-8 flex flex-col justify-center items-center mt-10 mb-[300px]">
        <div
          style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
          className="w-[1000px] h-[500px] rounded-2xl p-8 shadow-2xl"
        >
          <h1 className="text-center mb-5 text-3xl text-[#DD1015] bold-text">
            تواصل معنا
          </h1>
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
        <div className="w-[900px] absolute bottom-[-115%]">
          <img alt="map" src={Map} />
          <MdLocationOn className="absolute top-[100px] left-[400px] text-[#DD1015] text-4xl" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
