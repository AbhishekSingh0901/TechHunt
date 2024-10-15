import Navbar from "../../shared/Navbar.component";
import { FaRegFileAlt } from "react-icons/fa";
import Footer from "../../shared/Footer.component";

const templates = [
  {
    name: "classic",
    uri: "/assets/templates/template_1.png",
  },
  {
    name: "retro",
    uri: "/assets/templates/template_2.png",
  },
  {
    name: "funky",
    uri: "/assets/templates/template_3.png",
  },
  {
    name: "pofessional",
    uri: "/assets/templates/template_4.png",
  },
  {
    name: "casual",
    uri: "/assets/templates/template_5.png",
  },
];

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
            {templates.map((template) => (
              <div
                key={template.name}
                className="relative rounded-md overflow-hidden border group text-indigo-900 "
              >
                <div className="group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:via-indigo-900 group-hover:to-blue-800 flex justify-center items-center group-hover:opacity-30 absolute top-0 bottom-0 left-0 right-0 "></div>
                <div className="cursor-pointer gap-2 absolute top-0 bottom-0 left-0 right-0 z-40 hidden group-hover:flex justify-center items-center trasition-all ">
                  <span className="px-5 py-8 bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-900 text-white rounded-t-full rounded-r-full flex flex-col font-medium justify-center items-center">
                    <FaRegFileAlt className="text-2xl" />
                    use template
                  </span>
                </div>
                <img src={template.uri} className=" h-full col-span-1" />
              </div>
            ))}

            <div className="h-full relative flex rounded-md justify-center items-center w-full bg-gradient-to-br from-indigo-600 via-indigo-900 to-blue-800 ">
              <div className="border-2 border-white px-5 py-2 bg-white rounded-t-full rounded-r-full">
                More coming soon
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
