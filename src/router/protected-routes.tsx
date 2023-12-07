import { useToken } from "@/context/token-provider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const tokenProtected = ["/user/settings"];

  const { token } = useToken();

  if (authProtected.includes(pathname)) {
    if (token) {
      return <Navigate to="/" />;
    }
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
