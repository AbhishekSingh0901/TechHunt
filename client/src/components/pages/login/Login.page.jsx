import Navbar from "../../shared/Navbar.component";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import { toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../redux/authSlice";
import { FiLoader } from "react-icons/fi";
import Logo from "../../ui/logo";
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["job seeker", "recruiter"], {
    message: "Please selcted a valid role",
  }),
});
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "job seeker",
    },
  });
  async function onSubmit(data) {
    try {
      dispatch(setLoading(true));
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success("Login successful");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="h-screen md:grid grid-flow-col lg:grid-cols-3 md:grid-cols-2">
      <img
        src="/assets/rocket2.jpeg"
        className="h-screen object-cover lg:col-span-2 hidden md:block overflow-hidden"
      />
      <div className="p-10 h-screen overflow-scroll scrollbar-hidden">
        <Logo />
        <div className=" max-w-6xl  mt-20 mx-auto p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full p-4 flex flex-col gap-4 "
            >
              <div className=" mb-4">
                <h1 className="font-bold text-4xl ">LogIn</h1>
                <p className="bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
                  Find the Job Made for you!
                </p>
              </div>
              <Button variant="outline">
                <img src="/assets/googlelogo.png" className="h-7 mr-3" />
                Log In with Google
              </Button>
              <div className="flex justify-center items-center gap-3">
                <div className="border-b flex-1"></div>
                <div className="text-sm text-muted-foreground">
                  or login with Email
                </div>
                <div className="border-b flex-1"></div>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="plase enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="plase enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-5"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="job seeker" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Job Seeker
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="recruiter" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Recruiter
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {loading ? (
                <Button
                  variant="disabled"
                  disabled={true}
                  className="bg-slate-900 text-slate-50"
                >
                  <FiLoader className=" animate-spin mr-2" />
                  <span>Loging in..</span>
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
              <span className=" text-muted-foreground text-sm mx-auto -mt-3 text-in">
                Don&apos;t have an account ?{" "}
                <Link to="/signup">
                  <Button variant="link" className="px-0 text-indigo-700">
                    SignUp
                  </Button>
                </Link>
              </span>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;