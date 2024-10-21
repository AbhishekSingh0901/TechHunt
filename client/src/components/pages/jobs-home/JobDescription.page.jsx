import Navbar from "../../shared/Navbar.component";
import JobDetails from "./JobDetails.component";

function JobDescription() {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <JobDetails />
    </div>
  );
}

export default JobDescription;
