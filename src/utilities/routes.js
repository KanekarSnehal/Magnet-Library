import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/index";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export const GuestRoute = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
};
