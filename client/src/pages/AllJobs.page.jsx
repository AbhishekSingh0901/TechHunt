import { FaBox, FaMessage, FaRegUser } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import JobsFilter from "../components/JobsFilter.component";
import JobsList from "../components/JobsList.component";
import Navbar from "../components/shared/Navbar.component";

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

function AllJobs() {
  return (
    <div>
      <Navbar />
      {/* Sidebar */}
      <div className="flex relative">
        <div className="w-24 h-screen pt-20 text-2xl bg-indigo-50 sticky top-0 flex flex-col items-center gap-4">
          <FaRegUser />
          <MdOutlineWorkOutline />
          <FaMessage />
          <FaBox />
        </div>
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 md:px-8 my-16">
            <h1 className="text-4xl md:text-5xl mt-5 lg:text-6xl mb-4 font-semibold mx-auto ">
              Search For Jobs
            </h1>
            <h3 className="tracking-[5px] font-semibold uppercase bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
              Your next career move !
            </h3>
            <JobsFilter />
            <JobsList jobs={demoJobs} withLogo={false} />
            <JobsList jobs={demoJobs} withLogo={false} />
            <JobsList jobs={demoJobs} withLogo={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllJobs;
