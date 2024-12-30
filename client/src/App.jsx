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

// Example auth state (replace with actual logic)
const isLoggedIn = false; // e.g., Boolean from Redux, Context, or some auth library

function ProtectedRoute({ children }) {
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
}

function PublicRoute({ children }) {
  if (isLoggedIn) return <Navigate to="/dashboard" replace />;
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <RootLayout />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Home />
          </PublicRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      { path: "jobs", element: <JobsHome /> },
      { path: "recruiters", element: <Recruiters /> },
      { path: "jobs/:id", element: <JobDescription /> },
      {
        path: "resume",
        element: (
          <PublicRoute>
            <Resume />
          </PublicRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
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
