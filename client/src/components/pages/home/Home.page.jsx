import Footer from "../../shared/Footer.component";
import Navbar from "../../shared/Navbar.component";
import Benefits from "./sections/Benefits.component";
import CallToAction from "./sections/CallToAction.component";
import Faq from "./sections/Faq.component";
import GetStarted from "./sections/GetStarted.component";
import HeroSection from "./sections/HeroSection.component";
import PlatformStats from "./sections/PlatformStats.component";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CallToAction />
      <PlatformStats />
      <Benefits />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default Home;
