import HeroSection from "../components/HeroSection.component";
import Navbar from "../components/shared/Navbar.component";
import Notice from "../components/shared/Notice.component";

function Home() {
  return (
    <div>
      {/* <Notice /> */}
      <Navbar />
      <HeroSection />
      {/* <CategoryCarousel /> */}
      {/* <HeroSection/>
      <CategoryCarousel />
      <LatestJobs />
      <Footer /> */}
    </div>
  );
}

export default Home;
