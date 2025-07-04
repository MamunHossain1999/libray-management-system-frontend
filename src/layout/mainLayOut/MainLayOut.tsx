import Footer from "@/components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-[calc(100vh-480px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayOut;
