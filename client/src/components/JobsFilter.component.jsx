import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
// import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { RiArrowDownWideFill } from "react-icons/ri";
function JobsFilter() {
  // const [openFilters, setOpenFilter] = useState(false);

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className=" text-xl w-full border p-3 mb-3 "
    >
      <div className="flex flex-col md:flex-row items-center gap-2  pb-3">
        <Input className=" max-w-sm" type="string" placeholder="Position" />
        <Input className=" max-w-sm" type="string" placeholder="Company" />
        <Input className=" max-w-sm" type="string" placeholder="Location" />
      </div>
      <div className=""></div>
      <div className="w-full flex items-center justify-center gap-2 text-indigo-900 text-base p-2 border-t cursor-pointer bg-slate-50">
        <IoFilter /> Filters <RiArrowDownWideFill />
      </div>
    </motion.div>
  );
}

export default JobsFilter;
