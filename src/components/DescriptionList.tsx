import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./DescriptionList.module.css";

export interface DescriptionItem {
  label: ReactNode;
  value: ReactNode;
  mono?: boolean;
}

export interface DescriptionListProps {
  items: DescriptionItem[];
  wide?: boolean;
  className?: string;
}

export function DescriptionList({ items, wide, className }: DescriptionListProps) {
  return (
    <dl className={cx(styles.list, wide && styles.columns2, className)}>
      {items.map((item, i) => (
        <div key={i} className={styles.row}>
          <dt className={styles.label}>{item.label}</dt>
          <dd className={cx(styles.value, item.mono && styles.mono)}>{item.value ?? "—"}</dd>
        </div>
      ))}
    </dl>
  );
}
