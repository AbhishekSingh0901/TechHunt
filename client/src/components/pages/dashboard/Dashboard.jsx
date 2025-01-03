import {
  FaBox,
  FaBriefcase,
  FaEarlybirds,
  FaMessage,
  FaUser,
} from "react-icons/fa6";

import { Link, Outlet, useLocation } from "react-router-dom";

import Navbar from "../../shared/Navbar.component";

const sidebarComps = [
  {
    title: "Profile",
    icon: <FaUser />,
  },
  {
    title: "Jobs",
    icon: <FaBriefcase />,
  },
  {
    title: "Messages",
    icon: <FaMessage />,
  },
  {
    title: "Applied",
    icon: <FaBox />,
  },
];

function Dashboard() {
  const url = useLocation().pathname;
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row relative ">
        {/* Sidebar */}
        <div className="sticky h-20 z-50 w-full  bottom-0 text-xl md:text-2xl md:w-24 md:h-screen md:top-0 md:pt-5  text-indigo-200 bg-indigo-900 flex md:flex-col items-center justify-evenly md:justify-start p-2 md:gap-4 gap-3">
          {sidebarComps.map((comp) => (
            <Link
              to={`/dashboard/${comp.title.toLowerCase()}`}
              key={comp.title}
              className={` hover:bg-indigo-950 hover:shadow-lg w-16 h-16 md:h-fit md:w-full flex flex-col justify-center items-center gap-1 p-2 rounded-md cursor-pointer transition-all duration-150 ${
                url.includes(comp.title.toLowerCase()) ? "bg-indigo-950 " : ""
              }`}
            >
              {comp.icon}
              <span className="hidden text-sm md:block">{comp.title}</span>
            </Link>
          ))}
          <FaEarlybirds className="hidden md:block sticky top-[92vh] text-5xl opacity-[0.03]" />
        </div>
        <div className="flex-1 relative  bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
