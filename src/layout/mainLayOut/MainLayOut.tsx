import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useAuthInit } from "../../features/userLogin/hooks/useAuthInit";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/scrollTop/ScrollToTop";

const MainLayOut = () => {
  useAuthInit();
  return (
    <div className="">
      <Navbar />
      <ScrollToTop/>
      <main className="min-h-[calc(100vh-410px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayOut;
