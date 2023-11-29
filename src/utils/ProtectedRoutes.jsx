import { Navigate, Outlet } from "react-router-dom";
import { isAuthSelector } from "../store/selectors";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuth = useSelector(isAuthSelector);
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
