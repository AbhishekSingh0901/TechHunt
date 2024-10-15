import { Link } from "react-router-dom";
import Footer from "../../shared/Footer.component";
import Navbar from "../../shared/Navbar.component";
import { Button } from "../../ui/button";
import { AnimatedTabs } from "../../AnimatedTab.component";

function Recruiters() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full text-center my-16 font-bold flex flex-col gap-8">
          <h3 className="tracking-[5px] bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
            FROM PRE-SEED TO POST-IPO
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center">
            The one stop spot to find the best talent for your{" "}
            <span className="text-indigo-700">team</span>
          </h1>
          <h3 className="tracking-[5px] bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
            GET STARTED IN 10 MINUTES
          </h3>
        </div>
        <div className="w-full text-center my-16 border-b pb-10">
          <Link to="/signup">
            <Button className="px-8 py-6 text-xl font-light">
              Sign Up Now{" "}
            </Button>
          </Link>
        </div>
        <div className=" w-full my-20">
          <h2 className="text-3xl md:text-4xl font-medium mb-16">
            Discover the Benefits of Hiring Through Us
          </h2>
          <AnimatedTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recruiters;
