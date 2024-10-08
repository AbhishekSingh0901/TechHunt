import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import Signup from "./pages/Signup.page";
import Jobs from "./pages/Jobs.page";
import Recruiters from "./pages/Recruiters.page";
import AllJobs from "./pages/AllJobs.page";

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
    path: "/alljobs",
    element: <AllJobs />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
