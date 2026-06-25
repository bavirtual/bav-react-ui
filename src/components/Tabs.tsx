import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Tabs.module.css";

export interface TabItem {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  fitted?: boolean;
  className?: string;
}

export function Tabs({ items, value, onChange, fitted = false, className }: TabsProps) {
  return (
    <div className={cx(styles.list, fitted && styles.fitted, className)} role="tablist">
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={item.disabled}
            className={cx(styles.tab, active && styles.active)}
            onClick={() => onChange(item.value)}
          >
            {item.icon}
            {item.label}
            {typeof item.count === "number" && <span className={styles.count}>{item.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
