import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { Check } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { children, className, disabled, ...rest },
  ref,
) {
  return (
    <label className={cx(styles.label, disabled && styles.disabled, className)}>
      <input ref={ref} type="checkbox" className={styles.native} disabled={disabled} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <Check />
      </span>
      {children && <span>{children}</span>}
    </label>
  );
});
