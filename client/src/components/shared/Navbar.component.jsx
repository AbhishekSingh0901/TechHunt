import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import Logo from "../ui/logo";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      className="border-b flex justify-between  items-center p-3 px-4 md:px-10 bg-white"
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Logo />
      <div className=" flex gap-3 md:gap-5">
        <ul className="hidden md:flex items-center font-medium gap-3 md:gap-5 lg:text-base text-sm">
          <Link to="/jobs">
            <li className="hover:text-indigo-800 border-indigo-800 hover:border-b transition-all">
              For job seekers
            </li>
          </Link>
          <Link to="/recruiters">
            <li className="hover:text-indigo-800 border-indigo-800 hover:border-b transition-colors">
              For recruiters
            </li>
          </Link>
          <Link to="/resume">
            <li className="hover:text-indigo-800 border-indigo-800 hover:border-b transition-colors">
              Resume generator
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-40 flex justify-end">
        <div className=" flex gap-3">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button className=" bg-indigo-800 hover:bg-indigo-900">
              SignUp
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
