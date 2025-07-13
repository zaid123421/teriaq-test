
export default function AddButton ({ children, onClick, className }) {
  return(
    <button onClick={onClick} className={`border border-black duration-300 p-2 rounded-full text-sm hover:text-black hover:bg-white ${className}`}>
      {children}
    </button>
  );
}