import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuth = useSelector();
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
