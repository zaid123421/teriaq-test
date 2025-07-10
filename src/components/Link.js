export default function Link({ toPlace, label, className }) {
  return(
    <a href={toPlace} className={`pb-2 md:mb-0 border-b-2 border-transparent hover:border-[#DD1015] duration-300 ${className}`}>
      {label}
    </a>
  );
}