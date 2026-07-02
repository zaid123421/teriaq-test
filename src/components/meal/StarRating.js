import { memo } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function StarRating({ rate }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rate ? (
          <FaStar key={i} className="text-[#EFC101] mr-1" />
        ) : (
          <FaRegStar key={i} className="text-[#EFC101] mr-1" />
        )
      )}
    </div>
  );
}

export default memo(StarRating);
