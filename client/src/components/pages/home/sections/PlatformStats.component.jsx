import { FaArrowDownLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function PlatformStats() {
  return (
    <div className="bg-[#0B192C] relative text-indigo-100">
      <div className=" p-12 rounded-full bg-[#0B192C] absolute  left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
        <FaArrowDownLong className="text-2xl " />
      </div>
      <div className="w-full max-w-7xl mx-auto p-32">
        <div className="flex flex-col lg:flex-row lg:justify-between text-center items-center gap-12">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-col"
          >
            <h1 className=" text-6xl md:text-8xl  font-extrabold ">1M+</h1>
            <p>Matches Made</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-8xl  font-extrabold ">100K+</h1>
            <p>Jobs Posted</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl  font-extrabold ">5M+</h1>
            <p>Job Ready Candidates</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PlatformStats;
