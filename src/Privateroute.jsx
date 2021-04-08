import { Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { useAuth } from "./AuthProvider";

export function Privateroute({ path, ...props }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" state={{ from: path }} replace element={<Login />} />
  );
}
