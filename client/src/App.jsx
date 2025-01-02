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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    element: (
      <PublicRoutes>
        <RootLayout />
      </PublicRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      { path: "jobs", element: <JobsHome /> },
      { path: "recruiters", element: <Recruiters /> },
      { path: "jobs/:id", element: <JobDescription /> },
      {
        path: "resume",
        element: <Resume />,
      },

      // Add more routes as needed
    ],
  },
  {
    element: (
      <ProtectedRoutes>
        <RootLayout />
      </ProtectedRoutes>
    ),
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
  {
    // Fallback route for 404 Not Found
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}

export default App;
