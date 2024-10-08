import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiLogOut } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.png";
import Logo from "../ui/logo";
function Navbar() {
  const user = true;
  return (
    <div className="border-b flex justify-between items-center p-3 px-4 md:px-10">
      <Logo />
      <div className=" flex gap-3 md:gap-5">
        <ul className="hidden md:flex items-center font-medium gap-3 md:gap-5">
          <Link to="/jobs">
            <li className="hover:text-indigo-800 border-indigo-800 hover:border-b transition-all">
              For job seekers
            </li>
          </Link>
          <Link to="/recruiters">
            <li className="hover:text-indigo-800 border-indigo-800 hover:border-b transition-colors">
              For recruiters
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {user ? (
          <div className="flex items-center">
            <Popover asChild className="cursor-pointer">
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src={illustration} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className=" flex gap-2 border-b">
                  <Avatar>
                    <AvatarImage src={illustration} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className=" font-medium">Full Name</h4>
                    <p className=" text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className=" mt-3 flex flex-col items-start">
                  <Button variant="link" className="p-0 gap-1">
                    <FiEdit2 />
                    Edit Profile
                  </Button>
                  <Button variant="link" className="p-0 gap-1">
                    <FiLogOut />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className=" flex gap-3">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className=" bg-indigo-800 hover:bg-indigo-900">
                SignUp
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
