import stevejobs from "../../images/png/Steve Jobs.png";
import logo from "../../images/png/Logo.png";

import { useContext } from "react";
import { LoginContext } from "../../context/LoginProvider";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Form } from "./style.js";

const Login = () => {
  const { handleSubmit, register, errors, signIn } = useContext(LoginContext);

  return (
    <>
      <Container>
        <section>
          <img src={stevejobs} alt="Steve Jobs" />
        </section>
        <section>
          <img src={logo} alt="Sua Logo" />
          <Form onSubmit={handleSubmit(signIn)}>
            <h1 className="weight_500_size_24">Dados de acesso</h1>
            <div className="general_input">
              <Input
                label={"E-mail"}
                register={register}
                id={"email"}
                error={errors?.email}
                placeholder={"Insira seu e-mail"}
                type={"text"}
                classInput={"weight_500_size_14"}
                classLabel={"weight_400_size_14"}
                paddingLeft={"5px"}
              />
              <Input
                label={"Senha"}
                register={register}
                id={"password"}
                error={errors?.password}
                placeholder={"Insira sua senha"}
                type={"password"}
                classInput={"weight_500_size_14"}
                classLabel={"weight_400_size_14"}
                paddingLeft={"5px"}
              />
            </div>
            <div className="general_button">
              <Button
                type="submit"
                name="Entrar"
                background="#476EE6"
                color="#FFFFFF"
                className="weight_500_size_18 forget"
                borderRadius="60px"
              />
              <div>
                <Button
                  name={"Esqueceu a senha?"}
                  background={"none"}
                  color={"#476EE6"}
                  className={"weight_500_size_14 password"}
                />
              </div>
            </div>
          </Form>
        </section>
      </Container>
    </>
  );
};

export default Login;
