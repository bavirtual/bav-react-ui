import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Input.module.css";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputSize?: "sm" | "md";
  invalid?: boolean;
  leftIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { inputSize, invalid, leftIcon, className, ...rest },
  ref,
) {
  return (
    <span className={styles.wrap}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cx(
          styles.input,
          styles[inputSize!],
          leftIcon && styles.hasIcon,
          invalid && styles.invalid,
          className,
        )}
        {...rest}
      />
    </span>
  );
});
