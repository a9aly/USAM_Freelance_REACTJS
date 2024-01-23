import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const { toggle, setToggle } = useState(false);
  return (
    <>
      <nav className="z-50 max-w-[100vw]">
        <div className="nav-container">
          <Link to="/" className="relative bg-white rounded-full w-24 h-24">
            {" "}
            <img
              src="usam.png"
              alt="USAM LOGO"
              className="absolute w-16 top-7 left-4"
            />
          </Link>
        </div>

        <div className="hidden sm:flex flex-row gap-3 pt-8 pl-2">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#6DAD04" : "",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/find-work"
            style={({ isActive }) => ({
              color: isActive ? "#6DAD04" : "",
            })}
          >
            Find Work
          </NavLink>
          <NavLink
            to="/find-freelancers"
            style={({ isActive }) => ({
              color: isActive ? "#6DAD04" : "",
            })}
          >
            Find Freelancers
          </NavLink>
        </div>

        <div className="nav-container md:mt-5 ml-8">
          <button className=" bg-button-color text-white">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>

        <div className="nav-container md:hidden">
          <img src="./menu.jpg" className="w-16 h-12 self-center"></img>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
