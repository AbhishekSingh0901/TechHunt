import { motion } from "framer-motion";

function Benefits() {
  return (
    <div className="flex flex-col justify-center lg:flex-row w-full mx-auto max-w-7xl">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="lg:p-20 p-10 lg:w-1/2"
      >
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
              Unique jobs at startups and tech companies you can’t find anywhere
              else.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-indigo-50 lg:p-20 p-10 lg:w-1/2"
      >
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
              Tap into a community of 1M+ engaged, completely ready candidates.
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
              A free applicant tracking system, or free integration with any ATS
              you may already use.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-indigo-200 text-indigo-800 aspect-square h-14 font-bold rounded-full flex justify-center items-center">
              4
            </div>
            <p className="text-sm text-muted-foreground">
              Let us handle the heavy-lifting with RecruiterCloud. Our new
              AI-Recruiter scans 500M+ candidates, filters it down based on your
              unique calibration, and schedules your favorites on your calendar
              in a matter of days.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Benefits;
