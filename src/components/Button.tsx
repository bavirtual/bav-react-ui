import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";
import { Spinner } from "./Spinner";
import styles from "./Button.module.css";

export type ButtonVariant = "default" | "primary" | "danger" | "subtle" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  default: "",
  primary: styles.primary,
  danger: styles.danger,
  subtle: styles.subtle,
  ghost: styles.ghost,
};

export function Button({
  variant = "default",
  size = "md",
  block = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cx(
        styles.button,
        styles[size],
        variantClass[variant],
        block && styles.block,
        loading && styles.loading,
        className,
      )}
      {...rest}
    >
      {loading && (
        <span className={styles.spinner}>
          <Spinner size={size === "lg" ? 20 : 16} />
        </span>
      )}
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
