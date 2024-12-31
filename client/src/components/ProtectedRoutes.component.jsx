import { useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoutes;
