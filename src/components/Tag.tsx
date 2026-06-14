import type { ReactNode } from "react";
import { X } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Tag.module.css";

export interface TagProps {
  children: ReactNode;
  onRemove?: () => void;
  className?: string;
}

export function Tag({ children, onRemove, className }: TagProps) {
  return (
    <span className={cx(styles.tag, !onRemove && styles.noClose, className)}>
      {children}
      {onRemove && (
        <button type="button" className={styles.close} onClick={onRemove} aria-label="Remove">
          <X />
        </button>
      )}
    </span>
  );
}
