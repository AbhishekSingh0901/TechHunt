import Navbar from "../../shared/Navbar.component";
import { FaArrowRight, FaBan, FaDollarSign } from "react-icons/fa";
import Footer from "../../shared/Footer.component";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const templates = [
  {
    name: "classic",
    uri: "/assets/templates/template_1.png",
  },
  {
    name: "retro",
    uri: "/assets/templates/template_2.png",
  },
  {
    name: "funky",
    uri: "/assets/templates/template_3.png",
  },
  {
    name: "pofessional",
    uri: "/assets/templates/template_4.png",
  },
  {
    name: "casual",
    uri: "/assets/templates/template_5.png",
  },
];

const featurs = [
  { title: "free forever", icon: <FaDollarSign /> },
  { title: "No user tracking", icon: <FaBan /> },
  { title: "6 resume templates to choose from", icon: <FaDollarSign /> },
  { title: "Single/mulitpage resumes", icon: <FaDollarSign /> },
  { title: "Manage multiple resumes", icon: <FaDollarSign /> },
  { title: "No Advertisements", icon: <FaBan /> },
  { title: "Customisable color palettes", icon: <FaDollarSign /> },
  { title: "custom resume section", icon: <FaDollarSign /> },
  { title: "Supports A4/letter page formats", icon: <FaDollarSign /> },
  { title: "Pick front multiple fonts", icon: <FaDollarSign /> },
];

function Resume() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <div className="flex flex-col px-4 lg:flex-row mb-20 overflow-clip justify-between gap-4 my-12 lg:my-20 w-screen overflow-x-clip">
        <div className="mx-auto  max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8 lg:ml-20">
          <div className="relative  w-full mt-16 font-bold flex flex-col gap-8 pb-8 text-center lg:text-left">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="tracking-[5px] bg-gradient-to-r uppercase from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text"
            >
              Welcome to your resume cockpit
            </motion.h3>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold"
            >
              Create the best <span className="text-indigo-700">resume</span>{" "}
              for you
            </motion.h1>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              className="tracking-[5px] bg-gradient-to-r uppercase from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text"
            >
              Unlimited customization and free templates
            </motion.h3>
            <Link to="/login">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                className="flex justify-center lg:justify-start"
              >
                <Button className="flex gap-4 mt-8 px-5 py-3 hover:scale-105 active:scale-95 transition-all duration-100">
                  Get Started <FaArrowRight />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: -60 }}
            >
              <img
                width={3600}
                height={1500}
                src="/assets/builder.jpg"
                alt="dashboard image"
                className="w-[65rem] rounded-lg bg-background/5 shadow-3xl ring-1 ring-foreground/10"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-50 py-24">
        <div className="max-w-7xl  mx-auto px-4 md:px-8 ">
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-medium mb-12"
          >
            Customize your resume to fit your needs
          </motion.h2>

          <div>
            {featurs.map((feature, idx) => (
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.05 * idx },
                }}
                className="inline-block px-6 py-1 m-1 text-sm bg-indigo-800 text-white rounded-md hover:bg-neutral-900 hover:text-indigo-50 border border-indigo-100 hover:border-white transition-all duration-100 "
                key={feature.title}
              >
                <div className="flex gap-2 p-1 items-center">
                  {feature.icon}
                  {feature.title}
                </div>
              </motion.span>
            ))}
            <span className="px-6 py-1 m-1 text-sm">and many more..</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-flow-row lg:grid-flow-col my-20">
        <div className="lg:p-20 p-10">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-medium mb-8"
          >
            Templates
          </motion.h3>
          <motion.p
            className="text-lg"
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
          >
            Explore the templates available in Reactive Resume and view the
            resumes crafted with them. They could also serve as examples to help
            guide the creation of your next resume.
          </motion.p>
        </div>
        <InfiniteMovingCards
          className="m-5 lg:m-0"
          items={templates}
          speed="slow"
          pauseOnHover={false}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Resume;

/* <div className="mt-8 mb-16">
          <h3 className="text-2xl md:text-3xl font-medium flex gap-3">
            Pick a Templates
          </h3>
          <div className="w-full mt-8 grid grid-flow-row gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {templates.map((template) => (
              <div
                key={template.name}
                className="relative rounded-md overflow-hidden border group text-indigo-900 "
              >
                <div className="group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:via-indigo-900 group-hover:to-blue-800 flex justify-center items-center group-hover:opacity-30 absolute top-0 bottom-0 left-0 right-0 "></div>
                <div className="cursor-pointer gap-2 absolute top-0 bottom-0 left-0 right-0 z-40 hidden group-hover:flex justify-center items-center trasition-all ">
                  <span className="px-5 py-8 bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 text-white rounded-t-full rounded-r-full flex flex-col font-medium justify-center items-center">
                    <FaRegFileAlt className="text-2xl" />
                    use template
                  </span>
                </div>
                <img src={template.uri} className=" h-full col-span-1" />
              </div>
            ))}

            <div className="h-full relative flex rounded-md justify-center items-center w-full bg-gradient-to-br from-indigo-600 via-indigo-900 to-blue-800 ">
              <div className="border-2 border-white px-5 py-2 bg-white rounded-t-full rounded-r-full">
                More coming soon
              </div>
            </div>
          </div>
        </div> */
