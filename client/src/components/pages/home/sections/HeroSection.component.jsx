import { Cover } from "@/components/ui/cover";

import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="h-full w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.3] relative flex items-center justify-center mb-14">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col lg:flex-row mb-20 justify-between gap-10 my-20 w-screen overflow-x-clip">
        <motion.div
          className="mx-auto  max-w-3xl shrink-0 lg:mx-0 lg:mt-0 lg:max-w-xl lg:pt-8 lg:ml-20"
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl text-center lg:text-left md:text-6xl lg:text-7xl font-semibold  relative py-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-900 dark:from-neutral-500 dark:via-white dark:to-white">
            <p>Give your tech journey</p>
            <span>
              a <Cover>: Speed Boost </Cover>
            </span>
          </h1>
          <p className=" p-3 md:text-xl text-center lg:text-left font-semibold mt-5 text-indigo-900 border-b pb-4 border-indigo-900 uppercase tracking-widest">
            Find the best tech talent in the world
          </p>
        </motion.div>
        <div className="mx-auto mt-24 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: -60 }}
            >
              <img
                width={3600}
                height={1500}
                src="/assets/hero-image.png"
                alt="dashboard image"
                className="w-[76rem] rounded-lg bg-background/5 shadow-2xl ring-1 ring-foreground/10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
