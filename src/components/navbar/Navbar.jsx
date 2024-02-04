import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { usam } from "../../assets/constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="z-50 max-w-[100vw]">
        <div className="nav-container">
          <Link
            to="/USAM_Freelance_REACTJS/"
            className="relative bg-white rounded-full w-24 h-24"
          >
            <img
              src={usam}
              alt="USAM LOGO"
              className="absolute w-16 top-7 left-4"
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-row gap-3 pt-8 pl-2">
          <NavLink
            to="/USAM_Freelance_REACTJS/"
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
          <Link to="/signup">
            <button className=" bg-button-color text-white">Sign Up</button>
          </Link>
          <Link to="/login">
            <button> Login</button>
          </Link>
        </div>

        <div className="nav-container md:hidden ">
          <img
            src={`${!toggle ? "./menu.jpg" : "./close.svg"}`}
            className="w-16 h-12 self-center"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {toggle ? (
          <div className=" fixed w-[90vw] h-[70vh] md:hidden  bg-gradient-to-tr  from-gradient-0-color via-gradient-1-color to-gradient-2-color flex flex-col justify-around text-center text-5xl font-extrabold top-[20%] shadow-2xl rounded-2xl text-black">
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
        ) : (
          <div></div>
        )}
      </nav>

      <Outlet />
    </>
  );
};
export default Navbar;
