import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navlink = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:scale-110 transition-all mr-2 hover:bg-transparent "
          style={({ isActive }) => {
            return {
              border: isActive ? "2px solid white" : "none",
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allCraft"
          className="hover:scale-110 transition-all mr-2 hover:bg-transparent"
          style={({ isActive }) => {
            return {
              border: isActive ? "2px solid white" : "none",
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
            };
          }}
        >
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraft"
          className="hover:scale-110 transition-all mr-2 hover:bg-transparent"
          style={({ isActive }) => {
            return {
              border: isActive ? "2px solid white" : "none",
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
            };
          }}
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCraft"
          className="hover:scale-110 transition-all mr-2 hover:bg-transparent"
          style={({ isActive }) => {
            return {
              border: isActive ? "2px solid white" : "none",
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
            };
          }}
        >
          My Art & Craft List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookTicket"
          className="hover:scale-110 transition-all mr-2 hover:bg-transparent"
          style={({ isActive }) => {
            return {
              border: isActive ? "2px solid white" : "none",
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
            };
          }}
        >
          Book Ticket
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#3C2317] shadow-lg md:py-4 md:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-30 p-3 shadow-xl border-2 border-[#3D3B40] transition-all  rounded-box w-52 -left-3 rounded-t-none bg-[#333333]"
          >
            {navlink}
          </ul>
        </div>
        <Link>
          {" "}
          <img className="w-24 md:w-36" src="log3.jpg" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium font-serif ">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex items-center">
          <div className="avatar cursor-pointer border-[#628E90] bg-[#fff] border-2 rounded-full mr-2">
            <div className="w-14 hover:p-1 transition-all  rounded-full">
              <img
                className="rounded-full"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <Link to="/login">
            <button className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all mr-2">
              Login
            </button>
          </Link>
          <button className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all mr-2">
            Logout
          </button>
         <Link to="/register">
         <button className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all">
            Register
          </button>
         </Link>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end md:hidden transition-all">
          <div tabIndex={0} role="button" className="mr-4">
            <FaAngleDown className="text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[20] menu shadow-xl bg-base-100 rounded-box p-4"
          >
            <li>
              <div className="avatar bg-white">
                <div className="w-14 bg-white border-2 rounded-full">
                  <img
                    className="bg-none"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </li>
            <li>
              <button className="btn bg-[#525CEB] text-white text-base px-5 rounded-xl hover:bg-[#3D3B40] transition-all mb-2 mt-2">
                Login
              </button>
            </li>
            <li>
              <button className="btn bg-[#525CEB] text-white text-base px-5 rounded-xl hover:bg-[#3D3B40] transition-all mb-2 mt-2">
                Logout
              </button>
            </li>
            <li>
              <button className="btn bg-[#525CEB] text-white text-base px-5 rounded-xl hover:bg-[#3D3B40] transition-all mb-2 mt-2">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
