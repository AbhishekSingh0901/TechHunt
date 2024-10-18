import { Tabs } from "../../../ui/tabs";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Access Verified Tech Talent",
      subtitle: "Hire top-tier candidates with confidence.",
      imageurl: "/assets/applicants.png",
      description:
        "All profiles are pre-screened to ensure they meet the high standards required in today’s tech industry.",
      value: "Access Verified Tech Talent",
    },
    {
      title: "Fast Job Posting",
      subtitle: "Post your jobs in minutes.",
      imageurl: "/assets/postjob.png",
      description:
        "Easily create job listings that reach our tech community in just a few clicks.",
      value: "Fast Job Posting",
    },
    {
      title: "Detailed Candidate Profiles",
      subtitle: "Get the complete picture.",
      imageurl: "/assets/applicants.png",
      description:
        "Explore detailed profiles, including skill sets, experience, and portfolios, before making contact.",
      value: "Detailed Candidate Profiles",
    },
    {
      title: "Direct Communication",
      subtitle: "Connect directly with applicants.",
      imageurl: "/assets/jobsposted.png",
      description:
        "Use our integrated messaging system to reach out to candidates and schedule interviews without leaving the platform.",
      value: "Direct Communication",
    },
    {
      title: "Tech-Only Community",
      subtitle: "Find the right expertise.",
      description:
        "Our focus on tech ensures every candidate has the skills your company needs.",
      value: "Tech-Only Community",
      imageurl: "/assets/applicants.png",
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col items-start justify-start max-w-7xl gap-6 mx-auto w-full">
      <Tabs tabs={tabs} />
    </div>
  );
}
