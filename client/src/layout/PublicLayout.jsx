import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import Navbar from "../components/shared/Navbar.component";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
