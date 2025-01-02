import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveToNextTab = () => {
    const newTabs = tabs.slice(1, tabs.length);
    newTabs.push(tabs[0]);

    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const moveToPreviousTab = () => {
    const newTabs = tabs
      .slice(tabs.length - 1)
      .concat(tabs.slice(0, tabs.length - 1));
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <button
        className=" absolute bg-[#cecece49] hover:bg-[#dddddd88] text-indigo-800 flex justify-center items-center text-2xl h-10 w-10 lg:h-20 lg:w-20 rounded-full z-50 top-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          moveToPreviousTab();
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <FaCaretLeft />
      </button>

      <button
        className="absolute bg-[#cecece49] hover:bg-[#dddddd88] text-indigo-800 flex justify-center items-center text-2xl h-10 w-10 lg:h-20 lg:w-20 rounded-full z-50 top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
        onClick={() => {
          moveToNextTab();
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <FaCaretRight />
      </button>

      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn(contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -45 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <div className="w-full overflow-hidden relative h-full rounded-md p-10 bg-gradient-to-br from-indigo-700 to-blue-900 text-indigo-200">
            <h3 className="text-2xl md:text-3xl font-medium">{tab.title}</h3>
            <h5 className=" mb-2">{tab.subtitle}</h5>
            <p className="text-sm">{tab.description}</p>
            <img
              src={tab.imageurl}
              alt="dummy image"
              className="object-cover object-left-top h-[60%]  md:h-[80%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
