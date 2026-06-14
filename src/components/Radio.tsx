import { type InputHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Radio.module.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: ReactNode;
}

export function Radio({ children, className, disabled, ...rest }: RadioProps) {
  return (
    <label className={cx(styles.label, disabled && styles.disabled, className)}>
      <input type="radio" className={styles.native} disabled={disabled} {...rest} />
      <span className={styles.dot} aria-hidden="true" />
      {children && <span>{children}</span>}
    </label>
  );
}

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  value?: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
  horizontal?: boolean;
  className?: string;
}

export function RadioGroup({
  name,
  value,
  options,
  onChange,
  horizontal,
  className,
}: RadioGroupProps) {
  return (
    <div role="radiogroup" className={cx(styles.group, horizontal && styles.horizontal, className)}>
      {options.map((o) => (
        <Radio
          key={o.value}
          name={name}
          value={o.value}
          checked={value === o.value}
          disabled={o.disabled}
          onChange={(e) => onChange?.(e.target.value)}
        >
          {o.label}
        </Radio>
      ))}
    </div>
  );
}
