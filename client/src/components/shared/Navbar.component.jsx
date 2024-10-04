import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiLogOut } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustration.png";
function Navbar() {
  const user = false;
  return (
    <div className=" bg-white flex justify-between items-center p-3 px-10">
      <div>
        <h1 className=" text-2xl font-bold text-neutral-700">
          Tech<span className=" text-indigo-600">Hunt</span>
        </h1>
      </div>
      <div className=" flex gap-5">
        <ul className=" flex items-center gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        {user ? (
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
        ) : (
          <div className=" flex gap-3">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className=" bg-indigo-600 hover:bg-indigo-700">
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
