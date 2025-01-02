import { Link } from "react-router-dom";
import Footer from "../../shared/Footer.component";
import { Button } from "../../ui/button";

import { motion } from "framer-motion";
import { AnimatedTabs } from "./components/AnimatedTab.component";

function Recruiters() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full text-center my-16 font-bold flex flex-col gap-8">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="tracking-[5px] bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text"
          >
            FROM PRE-SEED TO POST-IPO
          </motion.h3>
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center"
          >
            The one stop spot to find the best talent for your{" "}
            <span className="text-indigo-700">team</span>
          </motion.h1>
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="tracking-[5px] bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text"
          >
            GET STARTED IN 10 MINUTES
          </motion.h3>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full text-center my-16 border-b pb-10"
        >
          <Link to="/signup">
            <Button className="px-8 py-6 text-xl font-light">
              Sign Up Now{" "}
            </Button>
          </Link>
        </motion.div>
        <div className=" w-full my-20">
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-medium mb-16"
          >
            Discover the Benefits of Hiring Through Us
          </motion.h2>
          <AnimatedTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recruiters;
