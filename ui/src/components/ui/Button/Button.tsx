import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "remove";

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}

export const Button = ({
  children,

  variant = "primary",

  fullWidth = false,

  leftIcon,

  rightIcon,

  className = "",

  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${fullWidth ? styles.full : ""}
        ${className}
      `}
    >
      {leftIcon}

      {children}

      {rightIcon}
    </button>
  );
};