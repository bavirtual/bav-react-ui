import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./FileInput.module.css";

export interface FileInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "type" | "placeholder"
> {
  onFileChange?: (file: File | null) => void;
  fileName?: ReactNode;
  placeholder?: ReactNode;
  icon?: ReactNode;
  invalid?: boolean;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(function FileInput(
  {
    onFileChange,
    fileName,
    placeholder,
    icon,
    invalid,
    disabled,
    className,
    ...rest
  },
  ref,
) {
  return (
    <label
      className={cx(styles.drop, invalid && styles.invalid, disabled && styles.disabled, className)}
      data-has-file={fileName ? "true" : undefined}
    >
      <input
        ref={ref}
        type="file"
        disabled={disabled}
        className={styles.input}
        onChange={(e) => onFileChange?.(e.target.files?.[0] ?? null)}
        {...rest}
      />
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{fileName ?? placeholder}</span>
    </label>
  );
});
