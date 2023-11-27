import { NavLink } from "react-router-dom";

// import gambar
// asset footer atas
import Lokasi from "../assets/assetFooter/atas/lokasi.png";
import Pesan from "../assets/assetFooter/atas/pesan.png";
import Telepon from "../assets/assetFooter/atas/telepon.png";

// asset footer bawah
import Facebook from "../assets/assetFooter/bawah/facebook.png";
import Twitter from "../assets/assetFooter/bawah/twitter.png";
import Be from "../assets/assetFooter/bawah/be.png";
import Bola from "../assets/assetFooter/bawah/bola.png";
import Share from "../assets/assetFooter/bawah/share.png";

// customer service
import Help from "../pages/customer-service/Help&contact-us";
import Returns from "../pages/customer-service/Returns&refunds";
import Shipping from "../pages/customer-service/Shipping-policy";

// information
import About from "../pages/information/About";
import Delivery from "../pages/information/Delivery-inforamtion";
import Privacy from "../pages/information/Privacy-policy";
import Term from "../pages/information/Terms&conditions";

export default function Footer() {
  return (
    <footer className=" flex flex-col bg-black ">
      {/* footer atas */}

      <div className="border-b-[1px] flex justify-beetwen">
        {/* footer pertama */}
        <div className="w-1/2">
          <div className="py-14">
            <h1 className="text-orange-500 font-bold text-4xl px-8 py-2">
              alaskaki.
            </h1>

            <p className="text-white py-4 px-8 ">
              Outstock is a premium Templates theme with advanced admin module.
              It’s extremely customizable, easy to use and fully responsive and
              retina ready.
            </p>

            <div className="flex justify-beetwen items-center py-2 px-8">
              <img className=" flex gap-10 h-4 w-4" src={Lokasi} alt="" />
              <p className="text-white px-4">
                Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.
              </p>
            </div>

            <div className="flex justify-beetwen items-center py-2 px-8">
              <img className=" flex gap-10 h-4 w-4" src={Pesan} alt="" />
              <p className="text-white px-4">Email: Contact@basictheme.com</p>
            </div>

            <div className="flex justify-beetwen items-center py-2 px-8">
              <img className=" flex gap-10 h-4 w-4" src={Telepon} alt="" />
              <p className="text-white px-4">Phone Number: (800) 123 456 789</p>
            </div>
          </div>
        </div>

        {/* footer kedua */}
        <div className="w-1/2 flex justify-center ">
          <div className="w-1/2 flex justify-between">
            <div className="mt-20 flex flex-col">
              <h1 className="text-white font-bold mb-6">Information</h1>
              <NavLink to="/About" className="text-white hover:underline mb-4">
                About Us
              </NavLink>
              <NavLink
                to="/Delivery-inforamtion"
                className="text-white hover:underline mb-4"
              >
                Delivery Inforamtion
              </NavLink>
              <NavLink
                to="/Privacy-policy"
                className="text-white hover:underline mb-4"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/Terms&condition"
                className="text-white hover:underline mb-4"
              >
                Terms & Condition
              </NavLink>
            </div>
          </div>

          <div className="w-1/2 ">
            <div className="mt-20 flex flex-col">
              <h1 className="text-white font-bold mb-6">Customer Service</h1>
              <NavLink
                to="/Shipping-policy"
                className="text-white hover:underline mb-4"
              >
                Shipping Policy
              </NavLink>
              <NavLink
                to="/Help&contact-us"
                className="text-white hover:underline mb-4"
              >
                Help & Contact Us
              </NavLink>
              <NavLink
                to="/Returns&refunds"
                className="text-white hover:underline mb-4"
              >
                Returns & Refunds
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* footer bawah */}
      <div className="text-white flex justify-between py-9 px-14">
        <p>
          Copyright 2023 © <span className="text-orange-500">Outstock</span> all rights reserved. Powered by <span className="text-orange-500">Theme_pure</span>
        </p>
        <div className="h-9 mt-2 flex gap-10 [&>img]:h-3">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Be} alt="" />
          <img src={Bola} alt="" />
          <img src={Share} alt="" />
        </div>
      </div>
    </footer>
  );
}
