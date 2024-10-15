import { motion } from "framer-motion";
import { Button } from "../../../ui/button";
function CallToAction() {
  return (
    <div className="flex flex-col items-center">
      <motion.h3
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-neutral-900 font-medium text-xl md:text-3xl lg:text-4xl mb-10"
      >
        Where recruiters and job seekers connect
      </motion.h3>
      <div className="flex justify-center items-center gap-3 md:gap-6 mb-32">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Button className=" md:p-6 text-lg md:text-2xl">
            Find your next hire
          </Button>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Button className="md:p-6 text-lg md:text-2xl" variant="outline">
            Find your next job
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default CallToAction;
