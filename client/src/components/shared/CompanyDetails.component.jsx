import { motion } from "framer-motion";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import JobsList from "./JobsList.component";

const companyData = {
  name: "Tech Innovators Inc.",
  description:
    "Tech Innovators Inc. is a cutting-edge technology company that specializes in developing innovative solutions to address modern-day challenges. Founded in 2010, we have grown into one of the most respected firms in the tech industry. Our core mission is to revolutionize the way businesses operate by providing top-tier software development, artificial intelligence, and cloud-based solutions. We serve a diverse range of industries, including healthcare, finance, and e-commerce, helping organizations streamline their processes and enhance their technological infrastructure. At Tech Innovators, we believe in fostering a culture of creativity and collaboration. With a dedicated team of over 150 employees, we work closely with our clients to deliver customized solutions that drive results. Our commitment to excellence has earned us numerous awards and partnerships with leading global enterprises.",
  website: "https://www.techinnovators.com",
  employees: 150,
  logo: "/assets/demoComapnyLogo.png",
  location: "San Francisco, CA",
  userId: "652e9c4f2f0fbe1a88f7d290", // Replace with an actual ObjectId from your database
  jobs: [
    {
      title: "Software Engineer",
      description:
        "As a Software Engineer at Tech Innovators Inc., you will work on cutting-edge technology to build scalable and efficient software solutions. You will collaborate with cross-functional teams to design, develop, and deploy high-quality software products.",
      company: "652e9c4f2f0fbe1a88f7d290", // Reference to the company ObjectId
      location: "San Francisco, CA",
      salary: 120000,
      deadline: "2024-12-31T23:59:59Z",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"],
      created_by: "652f9a8e3f1fbe1a88c7e299", // Replace with an actual User ObjectId
      experience: "2+ years",
      applications: [],
    },
    {
      title: "Product Manager",
      description:
        "The Product Manager will drive the product strategy and roadmap at Tech Innovators Inc. You will work closely with engineers, designers, and business stakeholders to ensure the successful delivery of our software products.",
      company: "652e9c4f2f0fbe1a88f7d290", // Reference to the company ObjectId
      location: "San Francisco, CA",
      salary: 140000,
      deadline: "2024-11-15T23:59:59Z",
      skills: ["Product Management", "Agile", "Communication", "Leadership"],
      created_by: "652f9a8e3f1fbe1a88c7e299", // Replace with an actual User ObjectId
      experience: "3+ years",
      applications: [],
    },
  ],
};

function CompanyDetails() {
  const navigate = useNavigate();

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="md:absolute md:h-5/6 md:bottom-0 overflow-x-hidden bg-white md:rounded-t-2xl w-full scrollbar-hidden shadow-2xl px-4 p8-4 md:p-6 lg:p-8 md:pb-24 lg:pb-24"
    >
      <IoMdCloseCircle
        onClick={() => navigate(-1)}
        className="text-4xl absolute top-2 right-2 text-neutral-400 cursor-pointer hover:text-neutral-500 active:scale-95 transition-all dur"
      />

      <div className="flex flex-col lg:flex-row gap-3 h-full ">
        <div className="flex-1  p-3 overflow-y-scroll cool-scroll">
          <div className="flex gap-3 items-center">
            <img className="h-16 md:h-20 lg:h-24" src={companyData.logo} />
            <h1 className="text-xl md:text-3xl font-medium">
              {companyData.name}
            </h1>
          </div>
          <p className="text-md text-neutral-600 p-3 mb-2">
            {companyData.description}
          </p>
          <div className="p-3 mb-2">
            <h2 className="text-xl font-medium ">Location</h2>
            <p className="text-lg text-muted-foreground ">
              {companyData.location}
            </p>
          </div>
          <div className="p-3 mb-2">
            <h2 className="text-xl font-medium ">Number of Employees</h2>
            <p className="text-lg text-muted-foreground ">
              {companyData.employees}
            </p>
          </div>
          <div className="p-3 mb-2">
            <h2 className="text-xl font-medium ">Website</h2>
            <a
              href={companyData.website}
              target="blank"
              className="text-lg text-muted-foreground "
            >
              {companyData.website}
            </a>
          </div>
        </div>
        <div className="flex-1 top-20 p-3 mt-8">
          <h2 className="text-2xl font-medium mb-4">Work with us</h2>

          <div className="bg-indigo-200 pt-4 px-4 pb-2 ">
            <JobsList
              jobs={companyData.jobs}
              withCompanyName={false}
              withLogo={false}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CompanyDetails;
