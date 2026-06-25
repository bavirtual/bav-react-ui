import type { ReactNode } from "react";
import { cx } from "../utils/cx";
import { Title, Text } from "./Typography";
import styles from "./PageHeader.module.css";

export interface PageHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export function PageHeader({ title, description, actions, level = 2, className }: PageHeaderProps) {
  return (
    <header className={cx(styles.pageHeader, className)}>
      <div className={styles.text}>
        <Title level={level} noMargin>
          {title}
        </Title>
        {description && (
          <Text type="secondary" size="sm">
            {description}
          </Text>
        )}
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
