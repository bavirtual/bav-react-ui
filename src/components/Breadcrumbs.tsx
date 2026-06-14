import { Fragment, type ReactNode } from "react";
import { ChevronRight } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
  title: ReactNode;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  renderLink?: (href: string, children: ReactNode) => ReactNode;
  className?: string;
}

export function Breadcrumbs({ items, renderLink, className }: BreadcrumbsProps) {
  const link =
    renderLink ??
    ((href: string, children: ReactNode) => (
      <a className={styles.link} href={href}>
        {children}
      </a>
    ));

  return (
    <nav aria-label="Breadcrumb" className={cx(styles.nav, className)}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={i}>
              <li className={styles.item}>
                {item.href && !isLast ? (
                  link(item.href, item.title)
                ) : (
                  <span
                    className={isLast ? styles.current : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.title}
                  </span>
                )}
              </li>
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  <ChevronRight />
                </span>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
