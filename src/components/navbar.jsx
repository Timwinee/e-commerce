import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsCart, BsMoonFill, BsSunFill } from "react-icons/bs";
import Navlink from "./navlink";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const numItemsInCart = useSelector((state)=> state.cartState.numItemInCart)
  // console.log(numItemsInCart);
  
  return (
    <div className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className={"hidden sm:flex btn btn-primary text-3xl items-center"}
          >
            C
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost sm:hidden ">
              <FaBars className="h-6 w-6 " />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 shadow bg-base-100 w-56"
            >
              <Navlink />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal ">
            <Navlink />
          </ul>
        </div>
        <div className="navbar-end">
          {/* Theme */}
          <label className="swap swap-rotate">
            <input type="checkbox" checked={theme === themes.dracula} onChange={toggleTheme} />
            {/* Sun icon */}
            <BsSunFill className="h-4 w-4 swap-on" />

            {/* Moon icon */}
            <BsMoonFill className="h-4 w-4 swap-off" />
          </label>
          {/* Cart */}
          <NavLink
            to={"/cart"}
            className={"btn btn-ghost btn-circle btn-md ml-4"}
          >
            <div className="indicator">
              <BsCart className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
