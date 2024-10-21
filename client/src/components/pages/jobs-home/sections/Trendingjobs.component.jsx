import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";
import JobsList from "../../../shared/JobsList.component";
import { motion } from "framer-motion";

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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

function Trendingjobs() {
  return (
    <>
      <div className="flex justify-between mt-16 mb-12 items-center">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl  font-medium "
        >
          Latest Trending Jobs
        </motion.h1>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Link to="/login">
            <Button variant="link" className="md:text-xl">
              View all jobs &rarr;
            </Button>
          </Link>
        </motion.p>
      </div>
      <div className=" flex flex-col gap-4 lg:flex-row justify-between mb-16">
        <JobsList jobs={demoJobs} withCompanyName={true} />
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-3 lg:p-5 border rounded-md"
        >
          <h4 className="text-2xl font-medium mb-4">Level up you job search</h4>
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
          <Link to="/signup">
            <Button
              variant="outline"
              className="mt-4 hover:bg-neutral-900 hover:text-white"
            >
              Sign up & Get started
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}

export default Trendingjobs;
