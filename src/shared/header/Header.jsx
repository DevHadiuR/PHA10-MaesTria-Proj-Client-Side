import { useContext } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ProjectContext } from "../../hooks/provider/ArtProvider";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import ToggleTheme from "../../components/toggleTheme/ToggleTheme";

const Header = () => {
  const { user, logoutUser } = useContext(ProjectContext);
  const { displayName, photoURL } = user || {};

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Wanna Log Out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SURE",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire({
          title: "Hmmmmmmmm!!",
          text: "Sir You Have Successfully Log Out!",
          icon: "success",
        });
      }
    });
  };

  const navlink = (
    <>
      <li>
        <NavLink
          to="/"
          className=" transition-all mr-2 hover:bg-transparent "
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
          className=" transition-all mr-2 hover:bg-transparent"
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
          className=" transition-all mr-2 hover:bg-transparent"
          style={({ isActive }) => {
            return {
              border: isActive ? "2px solid white" : "none",
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
            };
          }}
        >
          Add Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCraft"
          className=" transition-all mr-2 hover:bg-transparent"
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
          className=" transition-all mr-2 hover:bg-transparent"
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
            className="menu menu-md dropdown-content mt-3 z-30 p-3 shadow-xl border-2 border-[#3D3B40] transition-all  rounded-box w-52 -left-3 rounded-t-none bg-[#3C2317]"
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
        <div className="m-5">
          <ToggleTheme></ToggleTheme>
        </div>
        <div className="hidden md:flex items-center">
          {user ? (
            <>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button">
                  <div className="avatar cursor-pointer border-[#628E90] bg-[#fff] border-2 rounded-full mr-2">
                    <div className="w-14 hover:p-1 transition-all  rounded-full">
                      <img className="rounded-full" src={photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[20] menu px-2 py-4 space-y-4 shadow rounded-box  -left-12 border-2 "
                >
                  <li>
                    <p className=" hover:bg-[#3C2317] text-xl font-serif font-semibold mt-2 transition-all bg-[#628E90] text-white">
                      {displayName}
                    </p>
                  </li>
                  <li className="  pl-2">
                    <button
                      onClick={logout}
                      className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all mr-2 mb-2"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all mr-2">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
        <div className="dropdown dropdown-bottom dropdown-end md:hidden transition-all">
          <div tabIndex={0} role="button" className="mr-4">
            <FaAngleDown className="text-3xl text-white" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[20] menu shadow-xl bg-[#3C2317] rounded-box p-4"
          >
            {user ? (
              <>
                <li>
                  <div
                    className="avatar flex justify-center tooltip  tooltip-warning"
                    data-tip={displayName}
                  >
                    <div className="w-14 hover:border-2 transition-all hover:p-1  hover:border-white rounded-full ">
                      <img
                        alt="/404.jpg"
                        data-tip={displayName}
                        className="bg-none rounded-full tooltip  tooltip-warning"
                        src={photoURL}
                      />
                    </div>
                  </div>
                </li>

                <li>
                  <Link>
                    <button
                      onClick={logout}
                      className="btn bg-[#628E90] text-white text-base px-6 rounded-xl hover:bg-[#3C2317] transition-all mb-2 mt-2"
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="btn bg-[#628E90] text-white text-base px-7 rounded-xl hover:bg-[#3C2317] transition-all mb-2 mt-2">
                      Login
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/register">
                    <button className="btn bg-[#628E90] text-white text-base px-5 rounded-xl hover:bg-[#3C2317] transition-all mb-2 mt-2">
                      Register
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
