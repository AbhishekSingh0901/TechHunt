import Navbar from "../../shared/Navbar.component";
import { PlaceholdersAndVanishInput } from "../../ui/placeholders-and-vanish-input";
import { HoverEffect } from "../../ui/card-hover-effect";
import JobsList from "../../JobsList.component";
import { Button } from "../../ui/button";
import Footer from "../../shared/Footer.component";
import { Link } from "react-router-dom";

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
    location: "San Francisco",
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
    location: "New York",
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
    location: "Austin",
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
    location: "Seattle",
    salary: 135000,
    deadline: new Date("2024-11-15"),
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    created_by: "60d2f9f4c75b2e1f84c8d005",
    experience: "2-4 years",
    applications: [],
  },
];

const placeholders = [
  "Frontend developer",
  "backend developer",
  "Full stack developer",
  "database administrator",
  "aws developer",
];

function Jobs() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className=" w-full text-center my-16 font-bold grid grid-flow-col">
          <img
            src="./assets/jobshero-1.webp"
            alt=""
            className=" hidden lg:block"
          />

          <div className=" w-full text-center">
            <span className=" tracking-[5px] bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
              OVER 50K REMOTE & LOCAL JOBS
            </span>
            <h1 className="text-5xl md:text-6xl mt-5 lg:text-7xl xl:text-8xl font-semibold max-w-7xl mx-auto text-center">
              Find what&apos;s next<span className="text-indigo-600">:</span>
            </h1>
          </div>
          <img
            src="./assets/jobshero-2.webp"
            alt=""
            className="hidden lg:block object-cover"
          />
        </div>
        <div className="px-4">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl mt-24 font-medium">
            Trending companies hiring
          </h1>
          <HoverEffect items={companies} />
        </div>
        <div>
          <div className="flex justify-between mt-16 mb-12 items-center">
            <h1 className="text-3xl md:text-4xl  font-medium ">
              Latest Trending Jobs
            </h1>
            <Link to="/alljobs">
              <Button variant="link" className="md:text-xl">
                View all jobs &rarr;
              </Button>
            </Link>
          </div>
          <div className=" flex flex-col gap-4 lg:flex-row justify-between mb-16">
            <JobsList jobs={demoJobs} withCompanyName={true} />
            <div className="p-3 lg:p-5 border rounded-md">
              <h4 className="text-2xl font-medium mb-4">
                Level up you job search
              </h4>
              <ul>
                <li className=" flex justify-start gap-3 mb-3 items-center">
                  <img src="/assets/svg/jobsearch.svg" />
                  <p>Unique jobs in niche industries </p>
                </li>
                <li className=" flex justify-start gap-3 mb-3 items-center">
                  <img src="/assets/svg/set.svg" />
                  <p>Set salary & equity upfront</p>
                </li>
                <li className=" flex justify-start gap-3 mb-3 items-center">
                  <img src="/assets/svg/filters.svg" />
                  <p>Personalized job filters</p>
                </li>
                <li className=" flex justify-start gap-3 mb-3 items-center">
                  <img src="/assets/svg/resume.svg" />
                  <p>Showcase skills beyond a resume</p>
                </li>
                <li className=" flex justify-start gap-3 mb-3 items-center">
                  <img src="/assets/svg/connect.svg" />
                  <p>Let founders and recruiters reach out to you</p>
                </li>
              </ul>
              <Button
                variant="outline"
                className="mt-4 hover:bg-neutral-900 hover:text-white"
              >
                Sign up & Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
