import { Div, Error } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({
  register,
  id,
  label,
  error,
  placeholder,
  type,
  classInput,
  classLabel,
  background,
  color,
  borderRadius,
  border,
  outline,
  paddingLeft,
}) => {
  const [visible, setVisible] = useState(false);

  const styleInput = {
    background: background,
    paddingLeft: paddingLeft,
    color: color,
    borderRadius: borderRadius,
    border: border,
    outline: outline,
  };

  let className = "InputContaine";

  type === "password" && (className = "InputContaine password");

  return (
    <>
      <div>
        <Div>
          <label className={classLabel}>{label}</label>
          {error?.message && (
            <Error>
              <BiErrorCircle />
              <span>{error?.message}</span>
            </Error>
          )}
        </Div>
        <div className={className}>
          <input
            style={styleInput}
            className={classInput}
            placeholder={placeholder}
            type={type === "password" ? (visible ? "text" : "password") : type}
            {...register(id)}
          />
          {type === "password" &&
            (visible ? (
              <AiFillEye
                style={{ cursor: "pointer" }}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiFillEyeInvisible
                style={{ cursor: "pointer" }}
                onClick={() => setVisible(true)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Input;
