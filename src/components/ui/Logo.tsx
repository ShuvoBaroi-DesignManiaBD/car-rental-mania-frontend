import { NavLink } from "react-router-dom";

type className = {
  className: string;
};

const Logo = ({ className }: className) => {
  return (
    <NavLink to="/">
      <img
        src="https://ibb.co.com/Bqc2ZmM"
        alt="logo"
        className={`${className}`}
      />
    </NavLink>
  );
};

export default Logo;
