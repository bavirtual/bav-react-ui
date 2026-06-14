import { useId, type ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./FormField.module.css";

export interface FormFieldProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  optional?: boolean;
  className?: string;
  children: ReactNode | ((props: { id: string; invalid: boolean }) => ReactNode);
}

export function FormField({
  label,
  hint,
  error,
  required,
  optional,
  className,
  children,
}: FormFieldProps) {
  const id = useId();
  const invalid = Boolean(error);

  return (
    <div className={cx(styles.field, className)}>
      {(label || optional) && (
        <div className={styles.labelRow}>
          {label && (
            <label htmlFor={id} className={styles.label}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </label>
          )}
          {optional && !required && <span className={styles.optional}>Optional</span>}
        </div>
      )}
      {typeof children === "function" ? children({ id, invalid }) : children}
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : hint ? (
        <span className={styles.hint}>{hint}</span>
      ) : null}
    </div>
  );
}
