import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "../utils/cx";
import styles from "./Menu.module.css";

const MenuContext = createContext<{ close: () => void } | null>(null);

export interface MenuProps {
  trigger: ReactNode;
  align?: "start" | "end";
  children: ReactNode;
  className?: string;
}

export function Menu({ trigger, align = "start", children, className }: MenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cx(styles.root, className)}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <div className={cx(styles.panel, styles[align])} role="menu">
          <MenuContext.Provider value={{ close: () => setOpen(false) }}>
            {children}
          </MenuContext.Provider>
        </div>
      )}
    </div>
  );
}

export interface MenuItemProps {
  onSelect?: () => void;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

export function MenuItem({ onSelect, icon, danger, disabled, children }: MenuItemProps) {
  const ctx = useContext(MenuContext);
  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      className={cx(styles.item, danger && styles.danger)}
      onClick={() => {
        onSelect?.();
        ctx?.close();
      }}
    >
      {icon && <span className={styles.itemIcon}>{icon}</span>}
      {children}
    </button>
  );
}

export function MenuSeparator() {
  return <div className={styles.separator} role="separator" />;
}

export function MenuLabel({ children }: { children: ReactNode }) {
  return <div className={styles.label}>{children}</div>;
}
