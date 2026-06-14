import { ChevronLeft, ChevronRight } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Pagination.module.css";

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  siblingCount?: number;
  className?: string;
}

const ELLIPSIS = "…";

function buildRange(page: number, pageCount: number, max: number): (number | string)[] {
  if (pageCount <= max) return Array.from({ length: pageCount }, (_, i) => i + 1);

  const side = Math.max(1, Math.floor((max - 3) / 2));
  const left = Math.max(2, page - side);
  const right = Math.min(pageCount - 1, page + side);

  const range: (number | string)[] = [1];
  if (left > 2) range.push(ELLIPSIS);
  for (let i = left; i <= right; i++) range.push(i);
  if (right < pageCount - 1) range.push(ELLIPSIS);
  range.push(pageCount);
  return range;
}

export function Pagination({
  page,
  pageCount,
  onChange,
  totalItems,
  pageSize,
  siblingCount,
  className,
}: PaginationProps) {
  if (pageCount <= 1 && totalItems === undefined) return null;

  const range = buildRange(page, pageCount, Math.max(5, siblingCount));
  const go = (p: number) => p >= 1 && p <= pageCount && p !== page && onChange(p);

  const summary =
    totalItems !== undefined && pageSize
      ? (() => {
          const from = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
          const to = Math.min(page * pageSize, totalItems);
          return (
            <span className={styles.count}>
              <strong>{from}</strong>–<strong>{to}</strong> of <strong>{totalItems}</strong>
            </span>
          );
        })()
      : null;

  return (
    <div className={cx(styles.bar, className)}>
      {summary ?? <span />}
      <div className={styles.nav}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
        >
          <ChevronLeft />
        </button>
        <div className={styles.pages}>
          {range.map((p, i) =>
            typeof p === "number" ? (
              <button
                key={p}
                type="button"
                className={cx(styles.page, p === page && styles.active)}
                aria-current={p === page ? "page" : undefined}
                onClick={() => go(p)}
              >
                {p}
              </button>
            ) : (
              <span key={`e${i}`} className={styles.ellipsis}>
                {p}
              </span>
            ),
          )}
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(page + 1)}
          disabled={page >= pageCount}
          aria-label="Next page"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
