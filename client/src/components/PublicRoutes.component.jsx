import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function PublicRoutes() {
  const { isAuthenticated } = useUser();

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}

export default PublicRoutes;
