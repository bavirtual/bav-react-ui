import type { ReactNode } from "react";
import styles from "./FormSection.module.css";

export interface FormSectionProps {
  index: number;
  title: string;
  description?: ReactNode;
  optional?: boolean;
  required?: boolean;
  children: ReactNode;
}

export function FormSection({
  index,
  title,
  description,
  optional,
  required,
  children,
}: FormSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <div className={styles.headText}>
          <h2 className={styles.title}>
            <span>
              {title}
              {required && <span className={styles.required}>*</span>}
            </span>
            {optional && <span className={styles.optional}>Optional</span>}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  );
}
