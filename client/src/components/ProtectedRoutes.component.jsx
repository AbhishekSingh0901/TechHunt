import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoutes({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  console.log(isLoading, isAuthenticated);
  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoutes;
