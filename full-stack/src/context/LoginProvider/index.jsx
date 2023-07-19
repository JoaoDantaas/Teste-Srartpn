import api from "../../services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { schema } from "../../validator";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      api
        .get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          navigate("/");
          console.log(error);
        });

      setLoading(false);
    };
    loadUser();
  }, [loading]);

  const signIn = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@TOKEN", res.data.token);
        toast.success("Login realizado com sucesso");
        navigate("/home");
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos");
        console.log(err);
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <LoginContext.Provider
      value={{
        handleSubmit,
        reset,
        register,
        errors,
        signIn,
        user,
        setUser,
        loading,
        setLoading,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
