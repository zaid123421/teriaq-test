export default function Modal({ successBox, icon, children }) {
  return(
    <div
      style={{ boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)" }}
      className={
        `
        md:text-xl
        success-box
        rounded-2xl
        bg-white
        text-black
        bold-text
        flex
        items-center
        justify-center
        fixed
        p-5
        w-[250px]
        md:w-[300px]
        right-[50%]
        translate-x-[50%]
        md:translate-x-0
        md:right-[5%]
        duration-700
        ${successBox ? `top-[5%] md:top-auto md:bottom-[5%]` : `top-[-10%] md:top-auto md:bottom-[-10%]`}
        `
      }>
      {icon}
      {children}
    </div>
  );
}