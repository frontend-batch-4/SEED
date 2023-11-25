// import trending produk
import A from "../assets/assetHome/a.png";
import B from "../assets/assetHome/b.png";
import C from "../assets/assetHome/c.png";
import D from "../assets/assetHome/d.png";
import E from "../assets/assetHome/e.png";
import F from "../assets/assetHome/f.png";
import G from "../assets/assetHome/g.png";
import H from "../assets/assetHome/h.png";
import I from "../assets/assetHome/i.png";

// import highlight
import AA from "../assets/assetHome/1.jpg";
import AB from "../assets/assetHome/2.jpg";
import AC from "../assets/assetHome/3.jpg";
import AD from "../assets/assetHome/4.jpg";

// import navlink
import { NavLink } from "react-router-dom";

// import corosel
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

export default function Home() {
  return (
    <>
      {/* coorosel */}
      <section className="container lg:pt-32 pt-[125px]">
        <Splide aria-label="My Favorite Images" className="p-0">
          {/* slide 1 */}
          <SplideSlide>
            {/* <img src="image1.jpg" alt="Image 1" /> */}
            <div className="bg-red-300 w-full lg:h-96 h-52 rounded-lg relative overflow-hidden box-border flex justify-center">
              <img
                className="h-full w-full object-cover object-top"
                src={A}
                alt=""
              />
            </div>
          </SplideSlide>

          {/* slide 2 */}
          <SplideSlide>
            {/* <img src="image2.jpg" alt="Image 2" /> */}
            <div className="bg-yellow-300 w-full h-11 ">
              <p>coming soon</p>
            </div>
          </SplideSlide>

          {/* slide 3 */}
          <SplideSlide>
            {/* <img src="image2.jpg" alt="Image 2" /> */}
            <div className="bg-green-300 w-full h-full">
              <p>coming soon</p>
            </div>
          </SplideSlide>
        </Splide>
      </section>

      {/* type product */}
      <div className="container">
        <div className="grid md:grid-cols-4 grid-cols-2 justify-center gap-8 mt-10 ">
          <div className="relative overflow-hidden box-border h-[330px] w-full rounded-lg bg-gray-300 flex flex-col justify-center items-center font-bold text-2xl">
            <div className="h-full w-full">
              <img src={AA} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center bg-gray-200 bg-opacity-50 w-full h-full">
              <p>PRIA DAN</p>
              <p>WANITA</p>
            </div>
          </div>

          <div className="relative overflow-hidden box-border h-[330px] w-full rounded-lg bg-gray-800 flex flex-col justify-center items-center font-bold text-2xl">
            <div className="h-full w-full">
              <img src={AB} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center bg-gray-200 bg-opacity-50 w-full h-full">
              <p>KOLEKSI</p>
              <p>PRIA</p>
            </div>
          </div>

          <div className="relative overflow-hidden box-border h-[330px] w-full rounded-lg bg-gray-300 flex flex-col justify-center items-center font-bold text-2xl">
            <div className="h-full w-full">
              <img src={AC} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center bg-gray-200 bg-opacity-50 w-full h-full">
              <p>KOLEKSI</p>
              <p>WANITA</p>
            </div>
          </div>

          <div className="relative overflow-hidden box-border h-[330px] w-full rounded-lg bg-gray-300 flex flex-col justify-center items-center font-bold text-2xl">
            <div className="h-full w-full">
              <img src={AD} className="h-full w-full object-cover" alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center bg-gray-200 bg-opacity-50 w-full h-full">
              <p>KOLEKSI</p>
              <p>ANAK</p>
            </div>
          </div>
        </div>
      </div>
      {/* trending product */}
      <div className="flex justify-center gap-10 mt-16">
        <div className="my-6">
          <div className="bg-gray-400 lg:w-[410px] w-20 lg:h-[2px]"></div>
        </div>
        <h1 className=" lg:text-4xl text-2xl">Trending Products</h1>
        <div className="my-6">
          <div className="bg-gray-400 w-[410px] h-[2px]"></div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <p className="text-gray-600">
          Mirum est notare quam littera gothica quam nunc putamus parum claram!
        </p>
      </div>

      {/* detail trending product */}
      <div className="flex justify-center mt-14 gap-10">
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-24 px-2 ">
              <img src={F} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Nike Air Max 97</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-16 px-1 ml-3">
              <img src={G} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Nike Air Jordan</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="">
              <img src={H} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Nike SB Dunk</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-28 px-5">
              <img src={I} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Nike Air Force 1</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
      </div>

      <div className="flex justify-center mt-14 gap-10">
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-8">
              <img src={B} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Handball Spezial</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-8">
              <img src={C} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Samba OG</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-6">
              <img src={D} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Hamburg</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
        <div>
          <div className="h-[335px] w-[265px] rounded-lg bg-gray-200">
            <div className="py-6">
              <img src={E} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Spezial St Patrik</p>
          <p className="font-bold text-orange-500">$ 96.00</p>
        </div>
      </div>

      {/* button lihat lebih banyak */}
      <div>
        <div className="flex justify-center mt-[100px] mb-[100px]">
          <NavLink to="/Beranda">
            <button className="bg-white text-xs font-semibold w-[200px] h-[50px] border-[2px] hover:bg-gray-200">
              LOAD MORE
            </button>
          </NavLink>
        </div>
      </div>

      {/* judul diskon  */}
      <div className="flex justify-center gap-10 mt-16">
        <div className="my-6">
          <div className="bg-gray-400 w-[490px] h-[2px]"></div>
        </div>
        <h1 className=" text-4xl">Sale Off</h1>
        <div className="my-6">
          <div className="bg-gray-400 w-[490px] h-[2px]"></div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <p className="text-gray-600">
          Mirum est notare quam littera gothica quam nunc putamus parum claram!
        </p>
      </div>

      {/* diskon  */}
      <div className="flex justify-center mt-14 gap-8">
        <div className="mb-10">
          <div className="h-[265px] w-[210px] rounded-lg bg-gray-200 ">
            <div className="py-6">
              <img src={E} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Spezial St Patrik</p>
          <div className="">
            <p className="text-gray-500 font-light text-sm">
              <s>$ 100.00</s>
            </p>
            <p className="font-bold text-orange-500">$ 96.00</p>
          </div>
        </div>
        <div className="mb-10">
          <div className="h-[265px] w-[210px] rounded-lg bg-gray-200">
            <div className="py-3">
              <img src={H} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Nike SB Dunk</p>
          <div className="">
            <p className="text-gray-500 font-light text-sm">
              <s>$ 100.00</s>
            </p>
            <p className="font-bold text-orange-500">$ 96.00</p>
          </div>
        </div>
        <div className="mb-10">
          <div className="h-[265px] w-[210px] rounded-lg bg-gray-200">
            <div className="py-8 px-2">
              <img src={B} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Handball Spezial</p>
          <div className="">
            <p className="text-gray-500 font-light text-sm">
              <s>$ 100.00</s>
            </p>
            <p className="font-bold text-orange-500">$ 96.00</p>
          </div>
        </div>
        <div className="mb-10">
          <div className="h-[265px] w-[210px] rounded-lg bg-gray-200">
            <div className="py-24 px-4">
              <img src={I} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Nike Air Force 1</p>
          <div className="">
            <p className="text-gray-500 font-light text-sm">
              <s>$ 100.00</s>
            </p>
            <p className="font-bold text-orange-500">$ 96.00</p>
          </div>
        </div>
        <div className="mb-10">
          <div className="h-[265px] w-[210px] rounded-lg bg-gray-200">
            <div className="py-8 px-2">
              <img src={D} alt="" />
            </div>
          </div>
          <p className="mt-4 font-medium">Adidas Hamburg</p>
          <div className="">
            <p className="text-gray-500 font-light text-sm">
              <s>$ 100.00</s>
            </p>
            <p className="font-bold text-orange-500">$ 96.00</p>
          </div>
        </div>
      </div>
    </>
  );
}
