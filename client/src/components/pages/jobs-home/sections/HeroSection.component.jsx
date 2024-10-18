import { PlaceholdersAndVanishInput } from "../../../ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";

const placeholders = [
  "Frontend developer",
  "backend developer",
  "Full stack developer",
  "database administrator",
  "aws developer",
];

function HeroSection() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className=" w-full text-center my-16 font-bold grid grid-flow-col">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="./assets/jobshero-1.webp"
          alt=""
          className=" hidden lg:block"
        />

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className=" w-full text-center"
        >
          <span className=" tracking-[5px] bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
            OVER 50K REMOTE & LOCAL JOBS
          </span>
          <h1 className="text-5xl md:text-6xl mt-5 lg:text-7xl xl:text-8xl font-semibold max-w-7xl mx-auto text-center">
            Find what&apos;s next<span className="text-indigo-600">:</span>
          </h1>
        </motion.div>
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="./assets/jobshero-2.webp"
          alt=""
          className="hidden lg:block object-cover"
        />
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="px-4"
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </motion.div>
    </>
  );
}

export default HeroSection;
