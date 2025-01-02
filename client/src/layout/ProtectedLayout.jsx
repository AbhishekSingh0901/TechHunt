import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";

const ProtectedLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
