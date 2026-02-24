import "./Button.css";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
