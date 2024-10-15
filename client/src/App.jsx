import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/Home.page";
import Login from "./components/pages/login/Login.page";
import Signup from "./components/pages/signup/Signup.page";
import Jobs from "./components/pages/jobs-home/Jobs.page";
import Recruiters from "./components/pages/recruiteres-home/Recruiters.page";
import Resume from "./components/pages/resume-builder-home/Resume.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/recruiters",
    element: <Recruiters />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
