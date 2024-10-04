import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import Signup from "./pages/Signup.page";

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
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
