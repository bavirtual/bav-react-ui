import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Panel.module.css";

export interface PanelProps {
  headerTitle?: ReactNode;
  headerChildren?: ReactNode;
  headerActions?: ReactNode;
  disableHeader?: boolean;
  flush?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Panel({
  headerTitle,
  headerChildren,
  headerActions,
  disableHeader = false,
  flush = false,
  className,
  children,
}: PanelProps) {
  const hasHeader = !disableHeader && (headerTitle || headerChildren || headerActions);
  return (
    <section className={cx(styles.panel, flush && styles.noPadding, className)}>
      {hasHeader && (
        <header className={styles.header}>
          {headerTitle && <h2 className={styles.title}>{headerTitle}</h2>}
          {headerChildren}
          {headerActions && <div className={styles.headerEnd}>{headerActions}</div>}
        </header>
      )}
      <div className={styles.body}>{children}</div>
    </section>
  );
}
