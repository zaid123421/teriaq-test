export default function ImageComponent({ imgSrc }) {
  return(
    <div className="w-full h-full rounded-xl overflow-hidden bg-transparent">
      <img className="w-full h-full rounded-3xl object-cover block" alt="food" src={imgSrc}/>
    </div>
  );
}