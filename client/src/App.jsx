import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/home/Home.page";
import Login from "./components/pages/login/Login.page";
import Signup from "./components/pages/signup/Signup.page";
import Recruiters from "./components/pages/recruiteres-home/Recruiters.page";
import Resume from "./components/pages/resume-builder-home/Resume.page";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./components/pages/dashboard/Dashboard";
import JobsHome from "./components/pages/jobs-home/Jobs.page";
import Jobs from "./components/pages/dashboard/jobs/Jobs";
import Profile from "./components/pages/dashboard/profile/Profile";
import NotFound from "./components/pages/not-found/NotFound.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "jobs", element: <JobsHome /> },
      { path: "recruiters", element: <Recruiters /> },
      { path: "resume", element: <Resume /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "jobs", element: <Jobs /> },
          { path: "profile", element: <Profile /> },
          { path: "", element: <Navigate to="jobs" replace /> },
        ],
      },
      // Add more routes as needed
    ],
  },
  {
    // Fallback route for 404 Not Found
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
