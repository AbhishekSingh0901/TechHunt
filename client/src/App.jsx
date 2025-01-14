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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PublicLayout from "./layout/PublicLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import RecruitersDashboard from "./components/pages/recruiters-dashboard/RecruitersDashboard";
import RecruitersLayout from "./layout/RecruitersLayout";
import Applications from "./components/pages/recruiters-dashboard/job-applications/Applications";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          { path: "jobs", element: <JobsHome /> },
          { path: "recruiters", element: <Recruiters /> },
          { path: "jobs/:id", element: <JobDescription /> },
          {
            path: "resume",
            element: <Resume />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },

      // Add more routes as needed
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              { path: "jobs", element: <Jobs /> },
              { path: "jobs/:id", element: <JobDetails /> },
              { path: "company/:id", element: <CompanyDetails /> },
              { path: "profile", element: <Profile /> },
              { path: "", element: <Navigate to="jobs" replace /> },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <RecruitersLayout />,
    children: [
      {
        path: "/recruiters-dashboard",
        element: <RecruitersDashboard />,
        children: [
          { path: "applications", element: <Applications /> },
          { path: "", element: <Navigate to="applications" replace /> },
        ],
      },
    ],
  },
  {
    // Fallback route for 404 Not Found
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
