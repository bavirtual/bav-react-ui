import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "solid" | "danger";
  children: ReactNode;
}

export function IconButton({
  label,
  size = "md",
  variant = "ghost",
  className,
  type = "button",
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cx(
        styles.button,
        styles[size],
        variant === "solid" && styles.solid,
        variant === "danger" && styles.danger,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
