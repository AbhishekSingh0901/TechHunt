import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa6";
import Logo from "../ui/logo";

function Footer() {
  return (
    <div className="bg-[#0B192C] h-32 p-12 flex justify-between items-center">
      <Logo monotone={true} />
      <div className="text-neutral-400 flex items-center gap-5 text-3xl">
        <FaGithub />
        <FaLinkedin />
        <FaUser />
      </div>
    </div>
  );
}

export default Footer;
