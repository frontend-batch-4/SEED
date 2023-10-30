// import button
import Button from "./Button";

// import navlink
import { NavLink } from "react-router-dom";

// logo cart
import Cart from "../assets/assetNavbar/cart.png";
import Search from "../assets/assetNavbar/search.png";

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full top-0 left-0 right-0 shadow dark:bg-gray-800">
      <div className=" flex items-center justify-between px-14 py-8">
        {/* logo */}
        <div>
          <h1 className="font-bold text-4xl">alaskaki.</h1>
        </div>

        {/* search */}
        <form className="w-[50%]" action="">
          <input
            className="rounded-md w-full"
            type="text"
            placeholder="cari di sini"
          />
        </form>

        {/* logo cart */}
        <img className="h-8 w-7 my-1" src={Cart} alt="" />

        <div className="bg-gray-700 w-[2px] h-8"></div>

        <div className="flex gap-4">
          {/* button daftar */}
          <NavLink to="/register">
            <Button>Daftar</Button>
          </NavLink>

          {/* button login */}
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
