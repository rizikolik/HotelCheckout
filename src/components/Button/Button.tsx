import React from "react";
import { StyledButtton } from "./Button.styles";

type ButtonProps = {
  title: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  visible?: boolean;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  title,
  visible,
  onClick,
  disabled,
  color,
}) => {
  return (
    <StyledButtton
      data-visible={visible}
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      {title}
    </StyledButtton>
  );
};
