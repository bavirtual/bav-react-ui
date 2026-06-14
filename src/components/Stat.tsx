import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Stat.module.css";

export interface StatProps {
  label: ReactNode;
  value: ReactNode;
  delta?: string;
  trend?: "up" | "down";
  hint?: ReactNode;
  className?: string;
}

export function Stat({ label, value, delta, trend, hint, className }: StatProps) {
  return (
    <div className={cx(styles.stat, className)}>
      <span className={styles.label}>{label}</span>
      <div className={styles.valueRow}>
        <span className={styles.value}>{value}</span>
        {delta && (
          <span
            className={cx(
              styles.delta,
              trend === "up" && styles.up,
              trend === "down" && styles.down,
            )}
          >
            {delta}
          </span>
        )}
      </div>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
