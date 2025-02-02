import { FaLocationDot } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCalendarSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>News</a>
      </li>
      <li>
        <a>Menu</a>
      </li>
      <li>
        <a>Reviews</a>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
    </>
  );

  return (
    <div className="font-semibold text-white">
      {/* Navbar for Large Screens */}
      <div className="hidden lg:block fixed w-full backdrop-blur-lg z-50">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="border lg:p-2 rounded-2xl"
              >
                <h2 className="flex items-center gap-1">
                  Reserve & Order <IoIosArrowDown />
                </h2>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/reserve">Reservation</Link>
                </li>
                <li>
                  <Link to="/takeaway">Take Away</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="text-xl">Velvet Spoon</a>
          </div>
          <div className="navbar-end">
            <ul tabIndex={0} className="menu menu-horizontal px-1">
              {navlink}
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar for Small Screens */}
      <div className="lg:hidden fixed w-full z-50">
        <div className="navbar bg-white">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black" 
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
              className="menu menu-sm dropdown-content bg-white shadow-lg rounded-box z-10  mt-2 w-40 p-4 text-black gap-3"
            >
              <li className="bg-white shadow-2xl p-1 border rounded-lg ">
                <Link to="/">Home</Link>
              </li>
              <li className="bg-white shadow-2xl p-1 border rounded-lg ">
                <a>News</a>
              </li>
              <li className="bg-white shadow-2xl p-1 border rounded-lg ">
                <a>Menu</a>
              </li>
              <li className="bg-white shadow-2xl p-1 border rounded-lg ">
                <a>Reviews</a>
              </li>
              <li className="bg-white shadow-2xl p-1 border rounded-lg ">
                <Link to="/order">Order</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Navigation for Small Screens */}
        <div className="fixed z-50 bottom-0 w-full bg-white shadow-2xl">
          <div className="flex justify-around items-center py-2">
            <Link
              to="/reserve"
              className="flex flex-col items-center text-black"
            >
              <IoCalendarSharp className="w-6 h-6" />
              <p>Reservation</p>
            </Link>

            <Link
              to="/takeaway"
              className="flex flex-col items-center text-black"
            >
              <GiShoppingBag className="w-6 h-6" />
              <p>Takeaway</p>
            </Link>
            <Link to="/map" className="flex flex-col items-center text-black">
              <FaLocationDot className="w-6 h-6" />
              <p>Route</p>
            </Link>
            <a
              href="tel:+8801942432047 "
              className="flex flex-col items-center text-black"
            >
              <MdCall className="w-6 h-6" />
              <p>Call</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
