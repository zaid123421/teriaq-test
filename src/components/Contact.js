import { IoCall } from "react-icons/io5";

export default function Contact({className, bg, text, label, number1, number2}) {
  return(
    <div style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }} className={`${bg} ${text} ${className} max-w-[300px] text-base md:text-2xl p-8 flex flex-col items-center justify-center rounded-xl`}>
      <h3 className="mb-2 bold-text">{label}</h3>
      <div className="flex items-center mb-2">
        <IoCall className="text-yellow-400" />
        <p className="ml-3">{number1}</p>
      </div>
      <div className="flex items-center">
        <IoCall className="text-yellow-400" />
        <p className="ml-3">{number2}</p>
      </div>
    </div>
  );
}