import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Divider.module.css";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  children?: ReactNode;
  className?: string;
}

export function Divider({ orientation, children, className }: DividerProps) {
  if (children) {
    return (
      <div className={cx(styles.labelled, className)} role="separator">
        {children}
      </div>
    );
  }
  return (
    <hr
      className={cx(styles.divider, styles[orientation!], className)}
      aria-orientation={orientation}
    />
  );
}
