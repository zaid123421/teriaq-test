import { memo } from "react";
import { NavLink } from "react-router-dom";
import AddButton from "../AddButton";
import StarRating from "./StarRating";

function MealCard({ meal, isInCart, onAdd, detailTo, variant = "shadow" }) {
  const addButtonClass = isInCart
    ? "bg-white text-black"
    : "bg-black text-white";
  const addButtonLabel = isInCart ? "مضاف للسلة" : "أضف للسلة";

  const actionRow = (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <AddButton
          className={addButtonClass}
          onClick={() => onAdd(meal)}
        >
          {addButtonLabel}
        </AddButton>
        <NavLink
          to={detailTo}
          className="ml-1 md:ml-2 text-black font-light text-sm border-2 border-[#22935F] hover:bg-transparent hover:text-black duration-300 bg-[#22935F] text-white rounded-full p-2"
        >
          المزيد
        </NavLink>
      </div>
      <StarRating rate={meal.rate} />
    </div>
  );

  if (variant === "menu") {
    return (
      <div className="rounded-2xl">
        <img
          src={meal.image}
          alt="meal_image"
          className="w-full h-[250px] object-cover rounded-t-2xl"
        />
        <div className="flex flex-col bg-white p-5 rounded-b-2xl">
          <div className="flex justify-between mb-2 items-center">
            <p className=" text-[#DD1015]">{meal.price} AED</p>
            <p className="">{meal.name}</p>
          </div>
          {actionRow}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-2xl">
      <img
        alt="meal_image"
        src={meal.image}
        className="w-full h-[250px] object-cover rounded-t-2xl mb-2"
      />
      <div className="p-4 text-xl font-bold text-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#DD1015]">{meal.price} AED</p>
          <p className="text-lg">{meal.name}</p>
        </div>
        {actionRow}
      </div>
    </div>
  );
}

export default memo(MealCard);
