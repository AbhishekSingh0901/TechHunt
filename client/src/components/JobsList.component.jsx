// {
//   title: "Frontend Developer",
//   description:
//     "Develop and maintain the front-end of our web applications using React.js.",
//   company: companies[0], // Microsoft
//   location: "San Francisco, CA",
//   salary: 120000,
//   deadline: new Date("2024-12-31"),
//   skills: ["JavaScript", "React", "HTML", "CSS"],
//   created_by: "60d2f9f4c75b2e1f84c8d001",
//   experience: "2-4 years",
//   applications: [],
// },

import { Button } from "./ui/button";

function JobsList({ jobs }) {
  return (
    <div className="max-w-4xl w-full">
      {jobs.map((job) => (
        <div
          key={job.title}
          className="border-b p-3 md:p-4 flex justify-between items-center hover:bg-neutral-50 transition-all duration-150"
        >
          <div className="flex gap-3 items-center">
            <img
              src={job.company.logo}
              className="h-8 md:h-10"
              alt={job.company.title}
            />
            <div>
              <h2 className="font-medium">{job.title}</h2>
              <div className="flex gap-2">
                {job.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default text-xs md:text-sm text-muted-foreground bg-indigo-50 p-0.5 px-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3">
            <Button variant="outline">Save</Button>
            <Button>Apply</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobsList;
