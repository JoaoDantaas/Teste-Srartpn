import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Preload from "../../components/Preload/";
import { LoginContext } from "../../context/LoginProvider";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(LoginContext);

  return loading ? (
    <Preload />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes;
