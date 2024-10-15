import {
  FaBox,
  FaBriefcase,
  FaEarlybirds,
  FaMessage,
  FaUser,
} from "react-icons/fa6";
import JobsFilter from "../../JobsFilter.component";
import JobsList from "../../JobsList.component";
import Navbar from "../../shared/Navbar.component";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const companies = [
  {
    id: 1,
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    logo: "/assets/microsoftlogo.png",
    numJobs: 10,
  },
  {
    id: 2,
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    logo: "/assets/netflixlogo.png",
    numJobs: 7,
  },
  {
    id: 3,
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    logo: "/assets/googlelogo.png",
    numJobs: 23,
  },
  {
    id: 4,
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    logo: "/assets/metalogo.png",
    numJobs: 15,
  },
];

const demoJobs = [
  {
    title: "Frontend Developer",
    description:
      "Develop and maintain the front-end of our web applications using React.js.",
    company: companies[0], // Microsoft
    location: "San Francisco, CA",
    salary: 120000,
    deadline: new Date("2024-12-31"),
    skills: ["JavaScript", "React", "HTML", "CSS"],
    created_by: "60d2f9f4c75b2e1f84c8d001",
    experience: "2-4 years",
    applications: [],
  },
  {
    title: "Backend Developer",
    description:
      "Work on server-side logic and database operations using Node.js and MongoDB.",
    company: companies[1], // Netflix
    location: "Remote",
    salary: 110000,
    deadline: new Date("2024-11-30"),
    skills: ["Node.js", "Express", "MongoDB"],
    created_by: "60d2f9f4c75b2e1f84c8d002",
    experience: "3-5 years",
    applications: [],
  },
  {
    title: "Full Stack Developer",
    description: "Build and maintain web applications using the MERN stack.",
    company: companies[2], // Google
    location: "New York, NY",
    salary: 130000,
    deadline: new Date("2025-01-15"),
    skills: ["React", "Node.js", "MongoDB", "Express"],
    created_by: "60d2f9f4c75b2e1f84c8d003",
    experience: "4-6 years",
    applications: [],
  },
  {
    title: "DevOps Engineer",
    description:
      "Manage infrastructure, CI/CD pipelines, and deployment processes.",
    company: companies[3], // Meta
    location: "Austin, TX",
    salary: 115000,
    deadline: new Date("2024-10-31"),
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    created_by: "60d2f9f4c75b2e1f84c8d004",
    experience: "3-5 years",
    applications: [],
  },
  {
    title: "Data Scientist",
    description:
      "Analyze large datasets and develop machine learning models for predictive analytics.",
    company: companies[0], // Microsoft
    location: "Seattle, WA",
    salary: 135000,
    deadline: new Date("2024-11-15"),
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    created_by: "60d2f9f4c75b2e1f84c8d005",
    experience: "2-4 years",
    applications: [],
  },
];

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

const techSkills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Python",
  "Django",
  "Flask",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "TypeScript",
  "GraphQL",
  "REST APIs",
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud Platform (GCP)",
  "Next.js",
  "Vue.js",
  "Svelte",
  "Webpack",
  "Bash/Shell Scripting",
  "Jenkins",
  "Terraform",
  "Java",
  "C++",
];

function AllJobs() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const url = useLocation().pathname;

  const editSkills = (skill) => {
    const hasSkill = selectedSkills.includes(skill);

    if (!hasSkill) {
      // Add skill if not already in the array
      setSelectedSkills((selectedSkills) => [...selectedSkills, skill]);
    } else {
      // Remove skill if it already exists in the array
      setSelectedSkills((selectedSkills) =>
        selectedSkills.filter((s) => s !== skill)
      );
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col-reverse md:flex-row relative ">
        {/* Sidebar */}
        <div className="sticky h-20 z-50 w-full  bottom-0 text-xl md:text-2xl md:w-24 md:h-screen md:top-0 md:pt-5  text-indigo-200 bg-indigo-900 flex md:flex-col items-center justify-evenly md:justify-start p-2 md:gap-4 gap-3">
          {sidebarComps.map((comp) => (
            <div
              key={comp.title}
              onClick={() => console.log(comp.title)}
              className={` hover:bg-indigo-950 hover:shadow-lg w-16 h-16 md:h-fit md:w-full flex flex-col justify-center items-center gap-1 p-2 rounded-md cursor-pointer transition-all duration-150 ${
                url.includes(comp.title.toLowerCase()) ? "bg-indigo-950 " : ""
              }`}
            >
              {comp.icon}
              <span className="hidden text-sm md:block">{comp.title}</span>
            </div>
          ))}
          <FaEarlybirds className="hidden md:block sticky top-[92vh] text-5xl opacity-[0.03]" />
        </div>
        {/* All Jobs */}
        <div className="flex-1">
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
        </div>
        {/* Profile */}
        {/* <Profile /> */}
      </div>
    </div>
  );
}

export default AllJobs;
