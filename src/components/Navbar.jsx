// import navlink
import { NavLink } from "react-router-dom";

// logo cart
import Cart from "../assets/assetNavbar/cart.png";
import Search from "../assets/assetNavbar/search.png";
import Profile from "../assets/assetNavbar/1.png";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 w-full bg-white shadow">
      <div className="container mx-auto">
        <div className="flex items-center lg:flex-nowrap flex-wrap justify-between  lg:py-8 py-3">
          {/* logo */}
          <div className="w-full lg:w-auto text-center mb-2 lg:mb-0">
            <NavLink to="/">
              <div className="sm:">
                <h1 className="font-bold lg:text-4xl text-2xl">alaskaki.</h1>
              </div>
            </NavLink>
          </div>

          {/* profile mobile */}
          {/* <NavLink to="/login">
            <div className="lg:hidden">
              <img className="lg:w-8 lg:h-8" src={Profile} alt="" />
            </div>
          </NavLink> */}

          {/* search */}
          <form
            className="lg:w-[60%] w-[70%] relative flex items-center"
            action=""
          >
            <img className="absolute ml-3" src={Search} alt="" />

            <input
              className="rounded-md w-full pl-10"
              type="text"
              placeholder="cari di sini"
            />
          </form>

          {/* logo cart */}
          <img className="lg:h-9 lg:w-8 my-1" src={Cart} alt="" />

          <NavLink to="/login">
            <div>
              <img
                className="lg:w-8 lg:h-8"
                src={Profile}
                alt=""
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
