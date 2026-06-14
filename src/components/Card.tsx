import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ interactive, className, children, ...rest }: CardProps) {
  return (
    <div className={cx(styles.card, interactive && styles.interactive, className)} {...rest}>
      {children}
    </div>
  );
}

export interface CardHeaderProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  media?: ReactNode;
  actions?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function CardHeader({
  title,
  subtitle,
  media,
  actions,
  className,
  children,
}: CardHeaderProps) {
  return (
    <div className={cx(styles.header, className)}>
      {media}
      {(title || subtitle) && (
        <div className={styles.headTitles}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
      )}
      {children}
      {actions && <div className={styles.headEnd}>{actions}</div>}
    </div>
  );
}

export function CardBody({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx(styles.body, className)} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx(styles.footer, className)} {...rest}>
      {children}
    </div>
  );
}
