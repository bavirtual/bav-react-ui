import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cx } from "../utils/cx";
import styles from "./Table.module.css";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  compact?: boolean;
  clickableRows?: boolean;
}

export function Table({ compact, clickableRows, className, children, ...rest }: TableProps) {
  return (
    <div className={styles.container}>
      <table
        className={cx(
          styles.table,
          compact && styles.compact,
          clickableRows && styles.clickable,
          className,
        )}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={className} {...rest} />;
}

export function TableBody({ className, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={className} {...rest} />;
}

export function TableRow({ className, ...rest }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={className} {...rest} />;
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
}

export function TableHead({ numeric, className, ...rest }: TableHeadProps) {
  return <th className={cx(numeric && styles.numeric, className)} {...rest} />;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  numeric?: boolean;
  mono?: boolean;
  muted?: boolean;
}

export function TableCell({ numeric, mono, muted, className, ...rest }: TableCellProps) {
  return (
    <td
      className={cx(
        numeric && styles.numeric,
        mono && styles.mono,
        muted && styles.muted,
        className,
      )}
      {...rest}
    />
  );
}

export function TableEmpty({ colSpan, children }: { colSpan: number; children: React.ReactNode }) {
  return (
    <tr>
      <td colSpan={colSpan} className={styles.empty}>
        {children}
      </td>
    </tr>
  );
}
