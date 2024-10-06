import { Cover } from "@/components/ui/cover";
import { Button } from "./ui/button";
import { FaArrowDownLong } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "./shared/Footer.component";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      "Click on 'Sign Up' and register using your email or social accounts like Google or LinkedIn.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "Find a job listing you like and click 'Apply Now' to upload your resume and fill out the application form.",
  },
  {
    question: "Is there a fee to use the platform?",
    answer:
      "No, it's completely free for job seekers. Employers can choose between free or premium listings.",
  },
  {
    question: "How do I post a job opening?",
    answer:
      "Log in to your employer account, click 'Post a Job,' fill in the details, and publish your listing.",
  },
  {
    question: "How can I track my applications?",
    answer:
      "Go to your dashboard and click on 'My Applications' to view the status of each submission.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Click 'Forgot Password' on the login page and follow the instructions to reset your password.",
  },
];

function HeroSection() {
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-black   dark:bg-grid-white/[0.2] bg-grid-black/[0.15] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-900 dark:from-neutral-500 dark:via-white dark:to-white">
            <p>Give your tech journey</p>
            <span>
              a <Cover>: Speed Boost </Cover>
            </span>
          </h1>
          <p className="text-center text-xl md:text-2xl font-semibold mt-5 text-indigo-900 border-b-4 pb-10 border-indigo-900 uppercase tracking-widest">
            Find the best tech talent in the world
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <h3 className="text-neutral-900 font-medium text-xl md:text-3xl lg:text-4xl mb-10">
          Where recruiters and job seekers connect
        </h3>
        <div className="flex justify-center items-center gap-3 md:gap-6 mb-32">
          <Button className=" md:p-8 text-lg md:text-2xl">
            Find your next hire
          </Button>
          <Button className="md:p-8 text-lg md:text-2xl" variant="outline">
            Find your next job
          </Button>
        </div>
      </div>
      <div className="bg-[#0B192C] relative text-indigo-100">
        <div className=" p-12 rounded-full bg-[#0B192C] absolute  left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
          <FaArrowDownLong className="text-2xl" />
        </div>
        <div className="w-full max-w-7xl mx-auto p-32">
          <div className="flex flex-col lg:flex-row lg:justify-between text-center items-center gap-12">
            <div className="flex-col">
              <h1 className=" text-6xl md:text-8xl  font-extrabold ">1M+</h1>
              <p>Matches Made</p>
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl  font-extrabold ">100K+</h1>
              <p>Jobs Posted</p>
            </div>
            <p>
              <h1 className="text-6xl md:text-8xl  font-extrabold ">5M+</h1>
              <p>Job Ready Candidates</p>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row w-full mx-auto max-w-7xl">
        <div className="lg:p-20 p-10 lg:w-1/2">
          <span className="font-bold  bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text uppercase tracking-[3px]">
            Got talent?
          </span>
          <h4 className="font-medium text-4xl mb-8">Why job seekers love us</h4>
          <div className=" flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                1
              </div>
              <p className="text-sm text-muted-foreground">
                Connect directly with founders at top startups - no third party
                recruiters allowed.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                2
              </div>
              <p className="text-sm text-muted-foreground">
                Everything you need to know, all upfront. View salary, stock
                options, and more before applying.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                3
              </div>
              <p className="text-sm text-muted-foreground">
                Say goodbye to cover letters - your profile is all you need. One
                click to apply and you&apos;re done.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14 font-bold rounded-full flex justify-center items-center">
                4
              </div>
              <p className="text-sm text-muted-foreground">
                Unique jobs at startups and tech companies you can’t find
                anywhere else.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 lg:p-20 p-10 lg:w-1/2">
          <span className="font-bold text-lg bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text uppercase tracking-[3px]">
            Need talent?
          </span>
          <h4 className="font-medium text-4xl mb-8">Why recruiters love us</h4>
          <div className=" flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                1
              </div>
              <p className="text-sm text-muted-foreground">
                Tap into a community of 1M+ engaged, completely ready
                candidates.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                2
              </div>
              <p className="text-sm text-muted-foreground">
                Everything you need to Kickstart your recruiting - set up job
                posts, company branding, and HR tools within 10 minutes, all for
                free. salary, stock options, and more before applying.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                3
              </div>
              <p className="text-sm text-muted-foreground">
                A free applicant tracking system, or free integration with any
                ATS you may already use.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-200 text-indigo-800 aspect-square h-14 font-bold rounded-full flex justify-center items-center">
                4
              </div>
              <p className="text-sm text-muted-foreground">
                Let us handle the heavy-lifting with RecruiterCloud. Our new
                AI-Recruiter scans 500M+ candidates, filters it down based on
                your unique calibration, and schedules your favorites on your
                calendar in a matter of days.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-16 px-4">
        <h3 className="text-3xl md:text-4xl mt-24 mb-10 font-medium">
          Frequently asked questions ?
        </h3>
        <Accordion type="single" collapsible className="w-full ">
          {faqData.map((faq, idx) => (
            <AccordionItem value={`item-${idx + 1}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="max-w-6xl mx-auto my-20">
        <div className="mx-4 border grid md:grid-flow-col md:grid-cols-3 rounded-md overflow-hidden">
          <img
            src="/assets/shapes.jpeg"
            className="md:col-span-1 w-full h-80 object-cover"
            alt="shape"
          />
          <div className="md:col-span-2 p-10">
            <h4 className="text-3xl font-medium md:text-4xl mb-3">
              Get started today
            </h4>
            <p className="text-xl mb-8">
              To apply to jobs with one-click and connect with founders and
              recruiters searching for your skills.
            </p>
            <Button>Create your profile</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;
