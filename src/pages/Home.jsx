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
  const items = [
    {
      img: F,
      title: "Nike Air Max 97",
      price: 96.0,
    },
    {
      img: G,
      title: "Nike Air Jordan",
      price: 96.0,
    },
    {
      img: H,
      title: "Nike SB Dunk",
      price: 96.0,
    },
    {
      img: I,
      title: "Nike Air Force 1",
      price: 96.0,
    },
    {
      img: B,
      title: "Adidas Munchen",
      price: 96.0,
    },
    {
      img: C,
      title: "Adidas Samba OG",
      price: 96.0,
    },
    {
      img: D,
      title: "Adidas Handball Spezial",
      price: 96.0,
    },
    {
      img: E,
      title: "Adidas Hamburg",
      price: 96.0,
    },

    // diskon
    {
      img: E,
      title: "Adidas Hamburg",
      diskon: 100.0,
      price: 96.0,
    },
    {
      img: H,
      title: "Nike SB Dunk",
      diskon: 100.0,
      price: 96.0,
    },
    {
      img: B,
      title: "Adidas Munchen",
      diskon: 100.0,
      price: 96.0,
    },
    {
      img: I,
      title: "Nike Air Force 1",
      diskon: 100.0,
      price: 96.0,
    },
    {
      img: D,
      title: "Adidas Handball Spezial",
      diskon: 100.0,
      price: 96.0,
    },
  ];

  return (
    <>
      {/* coorosel */}
      <section className="container flex justify-center lg:pt-32 pt-[125px]">
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
        <div className="grid lg:grid-cols-4 grid-cols-2 justify-center  gap-8 mt-10 ">
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
        <div className="my-6 mx-2">
          <div className="bg-gray-400 lg:w-[360px] w-20 h-[2px]"></div>
        </div>
        <h1 className=" lg:text-4xl text-2xl">Trending Products</h1>
        <div className="my-6 mx-2">
          <div className="bg-gray-400 lg:w-[360px] w-20 h-[2px]"></div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <p className="text-gray-600">
          Mirum est notare quam littera gothica quam nunc putamus parum claram!
        </p>
      </div>

      {/* detail trending product */}
      <div className="grid lg:grid-cols-4 grid-cols-2 justify-center mt-14 lg:gap-8 gap-6 px-20">
        {/* loop rendering */}
        {items.map((item, index) => {
          if (item.diskon == undefined) {
            return (
              <div key={index}>
                <div className="lg:h-[335px] h-[200px] w-full rounded-lg bg-gray-200">
                  <img
                    src={item.img}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                <p className="mt-4 font-medium">{item.title}</p>
                <p className="font-bold text-orange-500">
                  $ {item.price.toFixed(2)}
                </p>
              </div>
            );
          }
        })}
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
          <div className="bg-gray-400 lg:w-[490px] w-36 h-[2px]"></div>
        </div>
        <h1 className="lg:text-4xl text-2xl">Sale Off</h1>
        <div className="my-6">
          <div className="bg-gray-400 lg:w-[490px] w-36 h-[2px]"></div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <p className="text-gray-600 ">
          Mirum est notare quam littera gothica quam nunc putamus parum claram!
        </p>
      </div>

      {/* diskon  */}

        <div className="grid lg:grid-cols-5 grid-cols-3 justify-center gap-6 px-10 mb-20 mt-14">
          {/* loop rendering */}
          {items.map((item, index) => {
            if (item.diskon !== undefined) {
              return (
                <div key={index} className="">
                  <div className="lg:h-[300px] h-[168px] lg:w-52 rounded-lg bg-gray-200">
                    <img
                      src={item.img}
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  </div>
                  <p className="mt-4 font-medium">{item.title}</p>
                  <p className="text-gray-500 font-light text-sm">
                    <s>$ {item.diskon.toFixed(2)}</s>
                  </p>
                  <p className="font-bold text-orange-500">
                    $ {item.price.toFixed(2)}
                  </p>
                </div>
              );
            }
          })}
        </div>
    </>
  );
}
