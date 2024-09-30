import { NavLink } from "react-router-dom";

type className = {
  className: string;
};

const Logo = ({ className }: className) => {
  return (
    <NavLink to="/">
      <img
        src="https://i.ibb.co.com/pJbjzgF/Rentalmania.webp"
        alt="logo"
        className={`${className}`}
      />
    </NavLink>
  );
};

export default Logo;
