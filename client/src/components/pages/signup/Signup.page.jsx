import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import Logo from "../../ui/logo";
import { motion } from "framer-motion";
import { useSignUpUser } from "../../../features/authentication/useSignUpUser";

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be 10 digits long.",
  }),
  role: z.enum(["job seeker", "recruiter"], {
    message: "Please selcted a valid role",
  }),
  profile: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Profile picture is required.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
      {
        message: "Unsupported file type. Only JPEG, PNG, and GIF are allowed.",
      }
    ),
});

function Signup() {
  const { register, isLoading } = useSignUpUser();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      role: "job seeker",
      profile: "",
    },
  });

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("role", data.role);
    if (data.profile) {
      formData.append("profile", data.profile);
    }
    register(formData);
  }

  return (
    <div className="h-screen md:grid grid-flow-col md:grid-cols-2 overflow-hidden">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="p-10 h-screen overflow-scroll scrollbar-hidden"
      >
        <Logo />
        <div className=" max-w-6xl mt-6 mx-auto p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full px-4  flex flex-col gap-4"
            >
              <div className=" mb-4">
                <h1 className="font-bold text-4xl ">Sign Up</h1>
                <p className="bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text">
                  Find the Job Made for you!
                </p>
              </div>

              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="plase enter your full name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="plase enter your phone number"
                        {...field}
                      />
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
              <div className=" flex flex-col lg:flex-row lg:justify-between gap-4">
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
                <FormField
                  control={form.control}
                  name="profile"
                  render={() => (
                    <FormItem>
                      <FormLabel>Profile</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          placeholder="plase select profile image"
                          onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            form.setValue("profile", file);
                          }}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {isLoading ? (
                <Button
                  variant="disabled"
                  disabled={true}
                  className="bg-slate-900 text-slate-50"
                >
                  <FiLoader className=" animate-spin mr-2" />
                  <span>Signin up..</span>
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
              <span className=" text-muted-foreground text-sm mx-auto -mt-3 text-in">
                Already have an account ?{" "}
                <Link to="/login">
                  <Button variant="link" className="px-0 text-indigo-700">
                    Login
                  </Button>
                </Link>
              </span>
            </form>
          </Form>
        </div>
      </motion.div>
      <motion.img
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="/assets/rocket.png"
        className="h-screen w-full object-cover hidden shadow-2xl rounded-l-2xl md:block overflow-clip"
      />
    </div>
  );
}

export default Signup;
