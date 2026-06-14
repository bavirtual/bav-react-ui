import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  label: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
  className?: string;
}

export function Tooltip({ label, placement, children, className }: TooltipProps) {
  return (
    <span className={cx(styles.wrap, className)}>
      {children}
      <span role="tooltip" className={cx(styles.bubble, styles[placement])}>
        {label}
      </span>
    </span>
  );
}
