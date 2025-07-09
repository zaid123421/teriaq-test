export default function Title({ title, className }){
  return(
    <h1 className={`text-center mb-5 text-3xl text-[#DD1015] bold-text ${className}`}>
      {title}
    </h1>
  );
}