import JobsFilter from "../../../JobsFilter.component";
import { motion } from "framer-motion";

function Applications() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 my-16">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="tracking-[5px] font-semibold uppercase bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text"
          >
            Your next career move !
          </motion.h3>
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl mt-2 lg:text-6xl mb-4 font-semibold mx-auto "
          >
            Search For Jobs
          </motion.h1>
          <JobsFilter />
          <div className="flex flex-col-reverse gap-4 lg:flex-row mb-16">
            <div className="flex-1">
              {/* <JobsList jobs={demoJobs} withCompanyName={true} withLogo={true} />
            <JobsList jobs={demoJobs} withCompanyName={true} withLogo={true} />
            <JobsList jobs={demoJobs} withCompanyName={true} withLogo={true} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
