import stevejobs from "../../images/png/Steve Jobs.png";
import logo from "../../images/png/Logo.png";

import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { RegisterContext } from "../../context/RegisterProvider";

import { Container, Form } from "./style";

const Register = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [terms, setTerms] = useState();
  const [classLabel, setClassLabel] = useState("");

  const { handleSubmit, register, errors, registerUser } =
    useContext(RegisterContext);

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <section>
          <img src={stevejobs} alt="Steve Jobs" />
        </section>
        <section>
          <img src={logo} alt="Sua Logo" />
          <Form onSubmit={handleSubmit(registerUser)}>
            <h1 className="weight_500_size_24">Cadastro</h1>
            <div className="general_input">
              <Input
                label={"Nome"}
                register={register}
                id={"name"}
                error={errors?.name}
                placeholder={"Insira seu nome"}
                type={"text"}
                classInput={"weight_500_size_14"}
                classLabel={"weight_400_size_14"}
                paddingLeft={"5px"}
              />
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
                placeholder={"Insira uma senha"}
                type={"password"}
                classInput={"weight_500_size_14"}
                classLabel={"weight_400_size_14"}
                paddingLeft={"5px"}
              />
              <Input
                label={"Confirme sua senha"}
                register={register}
                id={"confirmPassword"}
                error={errors?.confirmPassword}
                placeholder={"Confirma senha"}
                type={"password"}
                classInput={"weight_500_size_14"}
                classLabel={"weight_400_size_14"}
                paddingLeft={"5px"}
              />
            </div>
            {terms && (
              <h3 className="weight_500_size_13">
                É preciso aceitar os termos
              </h3>
            )}
            <h2 className="weight_600_size_14">Termos de uso e privacidade</h2>
            <div className="general_terms">
              <label className={classLabel}>
                <input
                  type="checkbox"
                  onClick={() => {
                    setCheckbox(!checkbox);
                    checkbox ? setClassLabel("") : setClassLabel("bgcolor");
                    setTerms(false);
                  }}
                />
                <span></span>
              </label>
              <div>
                <p className="weight_500_size_13">
                  Ao clicar neste botão, eu concordo com os termos de uso e
                  privacidade da nossa empresa.
                </p>
                <span className="weight_500_size_14">
                  Termos de uso e Privacidade
                </span>
              </div>
            </div>

            {checkbox ? (
              <div className="div-button">
                <Button
                  type="submit"
                  name="Cadastrar"
                  background="#476EE6"
                  color="#FFFFFF"
                  className="weight_600_size_18"
                  borderRadius="60px"
                />
              </div>
            ) : (
              <div className="div-button">
                <Button
                  type="button"
                  onClick={() => setTerms(true)}
                  name="Cadastrar"
                  background="#476EE6"
                  color="#FFFFFF"
                  className="weight_600_size_18"
                  borderRadius="60px"
                />
              </div>
            )}
          </Form>
          <footer>
            <h4 className="weight_500_size_15">Já tem uma conta?</h4>
            <Button
              name={"Login"}
              background={"none"}
              color={"#476EE6"}
              className={"weight_500_size_15"}
              onClick={() => navigate("/login", { replace: true })}
            />
          </footer>
        </section>
      </Container>
    </>
  );
};

export default Register;
