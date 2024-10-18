import { motion } from "framer-motion";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-4 border grid md:grid-flow-col md:grid-cols-3 rounded-md overflow-hidden"
      >
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
          <Link to="/signup">
            <Button>Create your profile</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default GetStarted;
