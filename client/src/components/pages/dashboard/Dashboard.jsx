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
      <Navbar />

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
        <Outlet />
        {/* All Jobs */}
        {/* <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 md:px-8 my-16">
            <h3 className="tracking-[5px] font-semibold uppercase bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
              Your next career move !
            </h3>
            <h1 className="text-4xl md:text-5xl mt-2 lg:text-6xl mb-4 font-semibold mx-auto ">
              Search For Jobs
            </h1>
            <JobsFilter />
            <div className="flex flex-col-reverse gap-4 lg:flex-row mb-16">
              <div className="flex-1">
                <JobsList
                  jobs={demoJobs}
                  withCompanyName={true}
                  withLogo={true}
                />
                <JobsList
                  jobs={demoJobs}
                  withCompanyName={true}
                  withLogo={true}
                />
                <JobsList
                  jobs={demoJobs}
                  withCompanyName={true}
                  withLogo={true}
                />
              </div>
              <div className="p-3 lg:p-4 border rounded-md lg:max-w-[300px] h-fit lg:sticky lg:top-5">
                {techSkills.map((techSkill) => (
                  <span
                    onClick={() => editSkills(techSkill)}
                    key={techSkill}
                    className={` cursor-pointer text-sm  mx-2 p-1 px-2 hover:bg-indigo-400 hover:text-white border border-indigo-300 inline-block mb-2 rounded-full ${
                      selectedSkills.includes(techSkill)
                        ? "bg-indigo-600 text-white"
                        : "text-card-foreground"
                    }`}
                  >
                    {techSkill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        {/* Profile */}
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default Dashboard;
