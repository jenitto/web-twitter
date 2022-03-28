import { ButtonProps } from "./button.interface";

const Button = ({ label, disabled, isLoading, onClick }: ButtonProps) => (
  <button
    className={`button ${isLoading ? "loading" : ""}`}
    disabled={disabled || isLoading}
    onClick={onClick}
  >
    <span className="button__label">{label}</span>
  </button>
);

export default Button;
