import { FaRegBookmark } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function JobsList({ jobs, withLogo = true, withCompanyName = false }) {
  return (
    <div className="max-w-4xl w-full">
      {jobs.map((job, idx) => (
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: idx * 0.06 },
          }}
          key={job.title}
          className=" p-3 md:p-4 flex justify-between items-center hover:bg-neutral-50 transition-all duration-150"
        >
          <div className="flex gap-3">
            {withLogo && (
              <img
                src={job.company.logo}
                className="h-8 md:h-10"
                alt={job.company.title}
              />
            )}
            <div>
              {withCompanyName && (
                <p className="text-sm text-muted-foreground">
                  {job.company.title}
                </p>
              )}
              <h2 className="font-medium">{job.title}</h2>
              <div className="flex gap-2">
                {job.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default text-[10px] md:text-sm text-muted-foreground bg-indigo-50 p-0.5 px-2 rounded-full"
                  >
                    {skill.split(" ").length === 1
                      ? skill
                      : skill
                          .split(" ")
                          .map((word) => word[0].toUpperCase())
                          .join("")}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 ">
            <span className="text-muted-foreground hidden md:block md:text-xs ">
              {job.location}
            </span>
            <Link to="/login">
              <Button>Apply</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">
                <FaRegBookmark />
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default JobsList;
