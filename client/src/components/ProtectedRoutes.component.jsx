import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoutes() {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectedRoutes;
