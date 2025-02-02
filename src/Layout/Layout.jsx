import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";

const Layout = () => {
  return (
    <div className="bg-white text-white">
      <div className="fixed w-full z-50">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen mb-16 ">
        <Outlet></Outlet>
      </div>
      <div className="hidden lg:block">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
