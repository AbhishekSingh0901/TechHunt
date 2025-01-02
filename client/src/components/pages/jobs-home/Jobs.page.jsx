import Footer from "../../shared/Footer.component";
import HeroSection from "./sections/HeroSection.component";
import Companies from "./sections/Companies.component";
import Trendingjobs from "./sections/Trendingjobs.component";

function JobsHome() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <HeroSection />
        <Companies />
        <Trendingjobs />
      </div>
      <Footer />
    </div>
  );
}

export default JobsHome;
