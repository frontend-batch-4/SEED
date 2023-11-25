import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// pages login-register
import Home from "./pages/Home";
import Register from "./pages/login-register/Register";
import Login from "./pages/login-register/Login";

// pages information
import About from "./pages/information/About-us";
import Delivery from "./pages/information/Delivery-inforamtion";
import Privacy from "./pages/information/Privacy-policy";
import Terms from "./pages/information/Terms&conditions";

// pages customer-service
import Help from "./pages/customer-service/Help&contact-us";
import Returns from "./pages/customer-service/Returns&refunds";
import Shipping from "./pages/customer-service/Shipping-policy";

// component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* routing halaman */}
      <ScrollToTop />
      <Routes>
        {/* home dan beranda */}
        <Route path="/" element={<Home />} />
        {/* login-register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* informasion */}
        <Route path="/About-us" element={<About-us />} />
        {/* customer service */}
      </Routes>

      {/* footer */}
      <Footer />
    </>
  );
}
