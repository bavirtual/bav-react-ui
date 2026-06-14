import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Switch.module.css";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { children, className, disabled, ...rest },
  ref,
) {
  return (
    <label className={cx(styles.label, disabled && styles.disabled, className)}>
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        className={styles.native}
        disabled={disabled}
        {...rest}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
});
