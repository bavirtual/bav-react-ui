import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Kbd.module.css";

export interface KbdProps {
  children: ReactNode;
  className?: string;
}

export function Kbd({ children, className }: KbdProps) {
  return <kbd className={cx(styles.kbd, className)}>{children}</kbd>;
}
