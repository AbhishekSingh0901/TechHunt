import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import RecruitersNavbar from "../components/shared/RecruiterNavbar.component";

const RecruitersLayout = () => {
  return (
    <div>
      <RecruitersNavbar />
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default RecruitersLayout;
