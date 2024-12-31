import { useState } from "react";
import { Navigate } from "react-router-dom";

function PublicRoutes({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) return <Navigate to="/dashboard" replace />;
  return children;
}

export default PublicRoutes;
