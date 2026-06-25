import { forwardRef, type InputHTMLAttributes } from "react";
import { Search, X } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./SearchInput.module.css";

export interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
> {
  value: string;
  onValueChange: (value: string) => void;
  shortcut?: string;
  className?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { value, onValueChange, shortcut, placeholder = "Search…", className, ...rest },
  ref,
) {
  const hasValue = value.length > 0;
  return (
    <div className={cx(styles.row, className)}>
      <span className={styles.icon}>
        <Search />
      </span>
      <input
        ref={ref}
        type="search"
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onValueChange(e.target.value)}
        {...rest}
      />
      {hasValue ? (
        <button
          type="button"
          className={styles.clear}
          onClick={() => onValueChange("")}
          aria-label="Clear search"
        >
          <X />
        </button>
      ) : (
        shortcut && <span className={styles.shortcut}>{shortcut}</span>
      )}
    </div>
  );
});
