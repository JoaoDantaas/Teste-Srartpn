import { createContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema } from "../../validator";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const registerUser = (data) => {
    delete data.confirmPassword;
    api
      .post("/user", data)
      .then((res) => {
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        toast.error("Ops! Usuário já cadastrado");
        console.log(err);
      });
  };

  return (
    <RegisterContext.Provider
      value={{ handleSubmit, reset, register, errors, registerUser }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
