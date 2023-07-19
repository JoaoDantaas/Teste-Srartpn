const Button = ({
  background,
  color,
  borderRadius,
  border,
  name,
  disabled,
  className,
  onClick,
  type,
  key,
}) => {
  const styleButton = {
    background: background,
    color: color,
    borderRadius: borderRadius,
    border: border,
  };

  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={styleButton}
      type={type}
      key={key}
    >
      {name}
    </button>
  );
};

export default Button;
