export default function Link({ toPlace, label, className }) {
  return(
    <a href={toPlace} className={`pb-2 ml-7 text-xl border-b-2 border-transparent hover:border-[#DD1015] duration-300 ${className}`}>
      {label}
    </a>
  );
}