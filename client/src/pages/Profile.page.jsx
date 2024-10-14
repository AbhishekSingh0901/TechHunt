import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FileUpload } from "../components/ui/file-upload";

const demoUser = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  phoneNumber: "1234567890",
  password: "securePassword123",
  role: "job seeker", // or "recruiter"
  profile: {
    bio: "A passionate software developer with over 5 years of experience in full-stack web development. Specializes in building dynamic and responsive web applications using modern JavaScript frameworks like React and Node.js. Adept at working with both front-end and back-end technologies, including MongoDB, Express, and RESTful APIs. Known for a keen eye for detail and a dedication to writing clean, maintainable code. Always eager to learn new technologies and take on challenging projects that push the boundaries of what’s possible.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Express.js",
      "TypeScript",
      "Git",
      "Redux",
      "Webpack",
      "Jest",
      "GraphQL",
      "Docker",
      "AWS",
    ],
    resumeURIs: [
      {
        title: "Resume 1",
        uri: "/assets/demo-resume-1.png",
      },
      {
        title: "Full Stack Resume",
        uri: "/assets/demo-resume-2.webp",
      },
    ],
    profilePhoto: "/assets/illustration.png",
    company: null, // if the user is a recruiter, this would be a reference to a company ObjectId
  },
};

function Profile() {
  return (
    <div className="flex-1 rounded-l-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 my-16">
        <div className="flex gap-5 xl:gap-8 flex-col items-center md:items-start md:flex-row">
          <img
            src={demoUser.profile.profilePhoto}
            className="h-40 w-40 xl:h-52 xl:w-52 rounded-full "
          />
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b">
              <h1 className="text-4xl lg:text-5xl mb-3  font-medium text-neutral-800">
                {demoUser.fullName}
              </h1>
              <p className="text-neutral-600 ">{demoUser.profile.bio}</p>
            </div>
            <div className="pb-3 border-b">
              <h3 className="tracking-[5px] text-xl font-semibold uppercase mb-3 text-indigo-700">
                Skills
              </h3>

              {demoUser.profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="mr-3 p-1 px-3 text-muted-foreground bg-indigo-50 inline-block mb-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pb-3 border-b">
              <h3 className="tracking-[5px] text-xl font-semibold uppercase mb-3 text-indigo-700">
                Contact
              </h3>
              <p className="flex items-center gap-3 mb-2 text-neutral-700">
                <FaEnvelope /> <span>{demoUser.email}</span>
              </p>
              <p className="flex items-center gap-3 text-neutral-700">
                <FaPhone /> <span>{demoUser.phoneNumber}</span>
              </p>
            </div>
            <div className="pb-3 border-b">
              <h3 className="tracking-[5px] text-xl font-semibold uppercase mb-3 text-indigo-700">
                Resumes
              </h3>
              <div className="grid grid-flow-col grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {demoUser.profile.resumeURIs.map((resume) => (
                  <div
                    key={resume.title}
                    className="flex flex-col gap-2 items-center"
                  >
                    <img
                      className="w-40 cursor-pointer border "
                      src={resume.uri}
                      onClick={() => window.open(resume.uri)}
                    />
                    <span className="text-sm text-muted-foreground">
                      {resume.title}
                    </span>
                  </div>
                ))}
                <div className="flex flex-col gap-2 items-center ">
                  <div className="w-40">
                    <FileUpload
                      onChange={() => {
                        console.log("changed");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;