export default function AddButton ({ onClick }) {
  return(
    <button onClick={onClick}className="border border-black duration-300 bg-black text-white p-2 rounded-full text-sm hover:text-black hover:bg-white">
      أضف للسلة
    </button>
  );
}