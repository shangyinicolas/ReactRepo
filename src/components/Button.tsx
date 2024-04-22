import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  // set property only in those
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
