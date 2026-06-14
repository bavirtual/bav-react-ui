import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Badge.module.css";

export type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  square?: boolean;
  mono?: boolean;
  dot?: boolean;
  children: ReactNode;
}

export function Badge({
  tone,
  square,
  mono,
  dot,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx(
        styles.badge,
        styles[tone],
        square && styles.square,
        mono && styles.mono,
        className,
      )}
      {...rest}
    >
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  );
}
