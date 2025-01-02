import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-300 via-indigo-100 to-indigo-200 flex overflow-hidden">
      <div className="h-full w-full  flex justify-center items-center">
        <div className="flex flex-col relative text-center mt-32">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -500 }}
            whileInView={{ opacity: 1, y: -300, transition: { duration: 0.1 } }}
            className="absolute top-0 right-0 -translate-y-full h-64 md:h-72 lg:h-80"
            src="/assets/404.gif"
          />
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
            className=" bg-indigo-400 shadow-2xl px-20 text-7xl md:8xl lg:text-9xl font-bold text-indigo-800 mb-4"
          >
            404
          </motion.h1>
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
            className="mb-8 text-xl uppercase tracking-[5px]"
          >
            Kuch to gadbad hai daya !
          </motion.h3>
          <motion.div
            className="flex gap-3 justify-center"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
          >
            <Link to="/login">
              <Button className="bg-white hover:bg-gray-100 text-indig-800 px-12 hover:scale-105 active:scale-95 transition-all duration-150">
                Login
              </Button>
            </Link>
            <Link to="/">
              <Button className="bg-indigo-700 hover:bg-indigo-800 text-white px-12 hover:scale-105 active:scale-95 transition-all duration-150">
                Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
