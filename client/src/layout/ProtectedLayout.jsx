import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import UsersNavbar from "../components/shared/UsersNavbar.component";

const ProtectedLayout = () => {
  return (
    <div>
      <UsersNavbar />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
