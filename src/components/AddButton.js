export default function AddButton ({ onClick }) {
  return(
    <button onClick={onClick}className="border border-black duration-300 bg-black text-white py-1 px-3 rounded-full text-sm py-3 hover:text-black hover:bg-white">
      أضف للسلة
    </button>
  );
}