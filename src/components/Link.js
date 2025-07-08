import { NavLink } from "react-router-dom";

export default function Link({ toPlace, label, className }) {
  return(
    <NavLink to={toPlace} className={({ isActive }) => `${className} pb-2 ml-7 text-xl ${isActive ? `border-b-2 border-red-500` : ``}`}>
      {label}
    </NavLink>
  );
}