import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to="/"
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-indigo-50 dark:bg-slate-800/[0.8] block  rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item}>
            <CardTitle logo={item.logo}>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children, item }) => {
  return (
    <div
      className={cn(
        "rounded-md h-full w-full p-4 overflow-hidden border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
      <CardFooter>{item.numJobs}</CardFooter>
    </div>
  );
};
export const CardTitle = ({ className, children, logo }) => {
  return (
    <div className="flex justify-between items-center">
      <h4
        className={cn(
          "text-zinc-900 text-xl font-bold tracking-wide mt-4",
          className
        )}
      >
        {children}
      </h4>
      <img src={logo} className="h-8" />
    </div>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-800 tracking-wide leading-relaxed text-sm mb-8",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardFooter = ({ className, children }) => {
  return (
    <div className="absolute bottom-2 left-7">
      <p className="text-xs p-2 border border-indigo-100 text-indigo-900 group-hover:bg-indigo-800 group-hover:text-white transition-all duration-200 rounded-md">
        {children} Active jobs
      </p>
    </div>
  );
};
