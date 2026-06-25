import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "react-feather";
import { cx } from "../utils/cx";
import styles from "./Modal.module.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  size?: "sm" | "md" | "lg";
  footer?: ReactNode;
  dismissible?: boolean;
  showClose?: boolean;
  compact?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  size = "md",
  footer,
  dismissible = true,
  showClose = true,
  compact = false,
  className,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dismissible) onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, dismissible, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className={styles.backdrop} onClick={() => dismissible && onClose()} role="presentation">
      <div
        className={cx(styles.modal, styles[size], compact && styles.compact, className)}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showClose) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {showClose && (
              <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
                <X />
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
