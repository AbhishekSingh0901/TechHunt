import { FaRegBookmark } from "react-icons/fa6";
import { Button } from "./ui/button";

function JobsList({ jobs, withLogo = true }) {
  return (
    <div className="max-w-4xl w-full">
      {jobs.map((job) => (
        <div
          key={job.title}
          className="border-b p-3 md:p-4 flex justify-between items-center hover:bg-neutral-50 transition-all duration-150"
        >
          <div className="flex gap-3 items-center">
            {withLogo && (
              <img
                src={job.company.logo}
                className="h-8 md:h-10"
                alt={job.company.title}
              />
            )}
            <div>
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
            <Button>Apply</Button>
            <Button variant="outline">
              <FaRegBookmark />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobsList;
