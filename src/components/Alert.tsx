import type { ReactNode } from "react";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Alert.module.css";

export type AlertTone = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  tone?: AlertTone;
  title?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
  icon?: ReactNode | null;
  className?: string;
}

const defaultIcon: Record<AlertTone, ReactNode> = {
  info: <Info />,
  success: <CheckCircle />,
  warning: <AlertTriangle />,
  danger: <AlertCircle />,
};

export function Alert({ tone, title, children, onClose, icon, className }: AlertProps) {
  const showIcon = icon !== null;
  return (
    <div className={cx(styles.alert, styles[tone], className)} role="alert">
      {showIcon && <span className={styles.icon}>{icon ?? defaultIcon[tone]}</span>}
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        {children}
      </div>
      {onClose && (
        <button type="button" className={styles.close} onClick={onClose} aria-label="Dismiss">
          <X />
        </button>
      )}
    </div>
  );
}
