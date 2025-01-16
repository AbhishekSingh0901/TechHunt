import { FaRegBookmark } from "react-icons/fa6";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function JobsList({ jobs, withLogo = true, withCompanyName = false }) {
  return (
    <div className="max-w-4xl w-full">
      {jobs.map((job, idx) => (
        <motion.div
          key={job.id}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: idx * 0.06 },
          }}
          className="p-3 bg-white mb-2 border-b md:p-4 flex justify-between items-center hover:bg-neutral-50 transition-all duration-150"
        >
          <Link
            key={job.title}
            to={`${job.id}`}
            className="flex gap-3 flex-grow"
          >
            {withLogo && (
              <img
                src={job.company.logo}
                className="h-8 md:h-10"
                alt={job.company.title}
              />
            )}
            <div>
              {withCompanyName ? (
                <Link
                  to={`/dashboard/company/${job.company.id}`}
                  className="text-sm text-muted-foreground hover:border-b"
                  onClick={(e) => e.stopPropagation()}
                >
                  {job.company.title}
                </Link>
              ) : (
                <span className="text-sm text-muted-foreground">
                  {job.company.title}
                </span>
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
          </Link>

          <div className="flex gap-2 md:gap-3">
            <span className="text-muted-foreground hidden md:block md:text-xs">
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
