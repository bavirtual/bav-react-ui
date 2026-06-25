import { cx } from "../utils/cx";
import styles from "./Stepper.module.css";

export interface StepperStep {
  n: number;
  label: string;
}

export interface StepperProps {
  steps: StepperStep[];
  current: number;
  ariaLabel?: string;
  className?: string;
}

export function Stepper({ steps, current, ariaLabel = "Progress", className }: StepperProps) {
  return (
    <ol className={cx(styles.steps, className)} aria-label={ariaLabel}>
      {steps.map((s, i) => {
        const done = s.n < current;
        const isCurrent = s.n === current;
        return (
          <li
            key={s.n}
            className={cx(styles.step, isCurrent && styles.current, done && styles.done)}
            aria-current={isCurrent ? "step" : undefined}
          >
            <span className={styles.num}>
              {done ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.check}>
                  <path fill="currentColor" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                s.n
              )}
            </span>
            <span className={styles.label}>{s.label}</span>
            {i < steps.length - 1 && <span className={styles.bar} aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  );
}
