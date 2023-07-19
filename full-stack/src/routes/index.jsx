import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import TalkDetail from "../pages/TalkDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<TalkDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
