import { cx } from "../utils/cx";
import styles from "./ProgressBar.module.css";

export interface ProgressBarProps {
  value?: number | null;
  size?: "sm" | "md" | "lg";
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  size,
  label,
  showValue,
  className,
}: ProgressBarProps) {
  const indeterminate = value === null || value === undefined;
  const pct = indeterminate ? 0 : Math.max(0, Math.min(100, value));

  return (
    <div className={cx(styles.wrap, className)}>
      {(label || showValue) && (
        <div className={styles.head}>
          {label && <span>{label}</span>}
          {showValue && !indeterminate && <span className={styles.value}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div
        className={cx(styles.track, size === "sm" && styles.sm, size === "lg" && styles.lg)}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cx(styles.bar, indeterminate && styles.indeterminate)}
          style={indeterminate ? undefined : { width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
