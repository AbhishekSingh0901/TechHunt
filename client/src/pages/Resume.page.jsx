import Navbar from "../components/shared/Navbar.component";
import { FaRegFileAlt } from "react-icons/fa";
import Footer from "../components/shared/Footer.component";
import { SparklesCore } from "../components/ui/sparkles";

function Resume() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative w-full text-center mt-16 font-bold flex flex-col gap-8 pb-8 border-b">
          <h3 className="tracking-[5px] bg-gradient-to-r uppercase from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
            Welcome to your resume cockpit
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center">
            Create the best <span className="text-indigo-700">resume</span> for
            you
          </h1>
          <h3 className="tracking-[5px] bg-gradient-to-r uppercase from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
            Unlimited customization and free templates
          </h3>
        </div>

        <div className="mt-8 mb-16">
          <h3 className="text-2xl md:text-3xl font-medium flex gap-3">
            Pick a Templates
          </h3>
          <div className="w-full mt-8 grid grid-flow-row gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative rounded-md overflow-hidden border">
              <div className="hover:bg-indigo-100 flex justify-center items-center group text-indigo-800 hover:opacity-70 absolute top-0 bottom-0 left-0 right-0 trasit duration-200">
                <FaRegFileAlt className="h-10 w-10 hidden group-hover:block" />
              </div>{" "}
              <img
                src="/assets/templates/template_1.png"
                className=" h-full col-span-1"
              />
            </div>
            <div className="relative rounded-md overflow-hidden border">
              <div className="hover:bg-indigo-100 flex justify-center items-center group text-indigo-800 hover:opacity-70 absolute top-0 bottom-0 left-0 right-0 trasit duration-200">
                <FaRegFileAlt className="h-10 w-10 hidden group-hover:block" />
              </div>{" "}
              <img
                src="/assets/templates/template_2.png"
                className=" h-full col-span-1"
              />
            </div>
            <div className="relative rounded-md overflow-hidden border">
              <div className="hover:bg-indigo-100 flex justify-center items-center group text-indigo-800 hover:opacity-70 absolute top-0 bottom-0 left-0 right-0 trasit duration-200">
                <FaRegFileAlt className="h-10 w-10 hidden group-hover:block" />
              </div>{" "}
              <img
                src="/assets/templates/template_3.png"
                className=" h-full col-span-1"
              />
            </div>
            <div className="relative rounded-md overflow-hidden border">
              <div className="hover:bg-indigo-100 flex justify-center items-center group text-indigo-800 hover:opacity-70 absolute top-0 bottom-0 left-0 right-0 trasit duration-200">
                <FaRegFileAlt className="h-10 w-10 hidden group-hover:block" />
              </div>
              <img
                src="/assets/templates/template_4.png"
                className=" h-full col-span-1"
              />
            </div>
            <div className="relative rounded-md overflow-hidden border">
              <div className="hover:bg-indigo-100 flex justify-center items-center font-thin group text-indigo-800 hover:opacity-70 absolute top-0 bottom-0 left-0 right-0 trasit duration-200">
                <FaRegFileAlt className="h-10 w-10 hidden group-hover:block" />
              </div>
              <img
                src="/assets/templates/template_5.png"
                className=" h-full col-span-1"
              />
            </div>
            <div className="h-full flex rounded-md justify-center items-center w-full bg-gradient-to-br from-indigo-800 via-purple-900 to-blue-800">
              <div className="border-2 border-white text-white rounded-md px-5 py-2">
                More Coming sson
              </div>
            </div>
          </div>
        </div>

        {/* <Template1 preview /> */}
      </div>
      <Footer />
    </>
  );
}

export default Resume;
