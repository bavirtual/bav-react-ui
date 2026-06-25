import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Select.module.css";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  selectSize?: "sm" | "md";
  invalid?: boolean;
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { selectSize = "md", invalid = false, options, placeholder, className, children, ...rest },
  ref,
) {
  return (
    <span className={styles.wrap}>
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cx(
          styles.select,
          selectSize === "sm" && styles.sm,
          invalid && styles.invalid,
          className,
        )}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options
          ? options.map((o) => (
              <option key={o.value} value={o.value} disabled={o.disabled}>
                {o.label}
              </option>
            ))
          : children}
      </select>
      <ChevronDown className={styles.chevron} />
    </span>
  );
});
