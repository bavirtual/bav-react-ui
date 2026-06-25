import styles from "./Spinner.module.css";

export interface SpinnerProps {
  size?: number;
  className?: string;
}

export function Spinner({ size = 18, className = "" }: SpinnerProps) {
  return (
    <span
      className={`${styles.spinner} ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    />
  );
}
