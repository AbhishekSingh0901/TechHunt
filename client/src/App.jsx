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
import JobDetails from "./components/shared/JobDetails.component";
import JobDescription from "./components/pages/jobs-home/JobDescription.page";
import CompanyDetails from "./components/shared/CompanyDetails.component";
import ProtectedRoutes from "./components/ProtectedRoutes.component";
import PublicRoutes from "./components/PublicRoutes.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoutes>
        <RootLayout />
      </PublicRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <PublicRoutes>
            <Home />
          </PublicRoutes>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        ),
      },
      { path: "jobs", element: <JobsHome /> },
      { path: "recruiters", element: <Recruiters /> },
      { path: "jobs/:id", element: <JobDescription /> },
      {
        path: "resume",
        element: (
          <PublicRoutes>
            <Resume />
          </PublicRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        ),
        children: [
          { path: "jobs", element: <Jobs /> },
          { path: "jobs/:id", element: <JobDetails /> },
          { path: "company/:id", element: <CompanyDetails /> },
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
