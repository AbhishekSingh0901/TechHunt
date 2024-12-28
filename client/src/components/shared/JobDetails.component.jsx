import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";

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
      "As a Frontend Developer, you will be responsible for building and maintaining the user interface of our web applications. You'll collaborate with designers and backend developers to implement responsive, performant, and accessible features using modern JavaScript frameworks like React.js. Your role will involve optimizing the UI for maximum speed and scalability, ensuring cross-browser compatibility, and implementing best practices in web development, including CSS architecture and state management using tools like Redux.",
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
      "As a Backend Developer, you will design and implement the server-side logic for our applications. You will work on RESTful API development using Node.js, manage the application data layer with MongoDB, and ensure the integration with third-party services. You'll be responsible for maintaining a scalable and secure backend architecture, handling authentication and authorization, and optimizing database queries for performance. In addition, you will be involved in writing unit and integration tests, ensuring a robust deployment pipeline using CI/CD tools.",
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
    description:
      "As a Full Stack Developer, you will take part in the full development lifecycle of web applications, from the client-side interface to the backend infrastructure. You will work with the MERN stack (MongoDB, Express, React, and Node.js) to build scalable, user-friendly applications. Your responsibilities will include designing database schemas, building RESTful APIs, implementing responsive UIs, and ensuring data integrity across multiple systems. You will also collaborate with cross-functional teams to address technical challenges and optimize performance across the stack.",
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
      "As a DevOps Engineer, you will manage our cloud infrastructure and deployment pipelines. You will work closely with development teams to automate and optimize the software delivery process, including continuous integration, testing, and deployment. You will be responsible for configuring and maintaining cloud services, managing containerization with Docker, orchestrating Kubernetes clusters, and ensuring system security and scalability. You'll also implement monitoring tools to ensure high availability, troubleshoot infrastructure issues, and optimize resource utilization in cloud environments like AWS.",
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
      "As a Data Scientist, you will analyze large datasets to extract actionable insights and build predictive models that drive business decisions. You will collaborate with stakeholders to understand data requirements, clean and preprocess data, and apply statistical techniques to solve complex problems. You will also develop and implement machine learning algorithms to predict trends and optimize performance. In addition, you will use visualization tools to communicate findings to non-technical teams, build data pipelines, and ensure the integrity and accuracy of data for ongoing analysis.",
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

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = demoJobs.find((job) => job.id == id);
  if (!job) return <div>Job not found</div>;
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="md:absolute md:h-3/4 md:bottom-0 overflow-x-hidden bg-white md:rounded-t-2xl w-full scrollbar-hidden shadow-2xl px-4 pt-4 md:p-6 lg:p-8 md:pb-24 lg:pb-24"
    >
      <IoMdCloseCircle
        onClick={() => navigate(-1)}
        className="text-4xl absolute top-2 right-2 text-neutral-400 cursor-pointer hover:text-neutral-500 active:scale-95 transition-all dur"
      />
      {/* Company logo */}
      <div className="flex justify-between items-center mt-12 pr-3 mb-4">
        <div className="flex gap-3 items-center">
          <img className="h-16 md:h-20 lg:h-24" src={job.company.logo} />
          <div>
            <h3 className="text-sm md:text-base text-muted-foreground">
              {job.company.title}
            </h3>
            <h1 className="text-xl md:text-3xl font-medium">{job.title}</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save</Button>
          <Button>Apply</Button>
        </div>
      </div>
      <div className="p-3 mb-2">
        <h2 className="text-xl font-medium ">Experience</h2>
        <p className="text-lg text-muted-foreground ">{job.experience}</p>
      </div>
      <div className="p-3 mb-2">
        <h2 className="text-xl font-medium ">Location</h2>
        <p className="text-lg text-muted-foreground ">{job.location}</p>
      </div>
      <div className="p-3 mb-2">
        <h2 className="text-xl font-medium mb-1">Skills</h2>
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="cursor-default text-muted-foreground bg-indigo-50 p-0.5 px-2 rounded-full mr-2"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="p-3 mb-2">
        <h2 className="text-xl font-medium mb-2">About the job</h2>
        <p>{job.description}</p>
      </div>
      <div className="p-3 mb-2">
        <h2 className="text-xl font-medium mb-2">About the company</h2>
        <p>{job.company.description}</p>
      </div>
    </motion.div>
  );
}

export default JobDetails;
