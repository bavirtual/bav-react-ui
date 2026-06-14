import { useState, useEffect } from "react";
import { AlertCircle } from "react-feather";
import styles from "./ConfirmDialog.module.css";
import { Button } from "./Button";
import { useConfirmStore } from "./confirmStore";

export function ConfirmDialog() {
  const { isOpen, options, isLoading, close, setLoading } = useConfirmStore();
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    if (!options) return;
    setLoading(true);
    setError(null);
    try {
      await options.onConfirm();
      close();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (isLoading) return;
    options?.onCancel?.();
    setError(null);
    close();
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCancel();
      if (e.key === "Enter" && !isLoading && !error) void handleConfirm();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isLoading, error]);

  if (!isOpen || !options) return null;

  const modalCls = `${styles.modal} ${options.danger ? styles.danger : ""}`;

  return (
    <div className={styles.backdrop} onClick={handleCancel} role="presentation">
      <div
        className={modalCls}
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="bav-confirm-title"
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <AlertCircle className={styles.icon} aria-hidden="true" />
            <h2 className={styles.title} id="bav-confirm-title">
              {options.title}
            </h2>
          </div>
        </div>

        <div className={styles.body}>
          {typeof options.message === "string" ? (
            <p style={{ margin: 0 }}>{options.message}</p>
          ) : (
            options.message
          )}
          {error && (
            <div className={styles.error} role="alert">
              <AlertCircle size={16} aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <Button variant="ghost" onClick={handleCancel} disabled={isLoading}>
            {options.cancelText ?? "Cancel"}
          </Button>
          <Button
            variant={options.danger ? "danger" : "primary"}
            onClick={handleConfirm}
            disabled={isLoading}
            autoFocus
          >
            {isLoading ? "Please wait…" : (options.confirmText ?? "Confirm")}
          </Button>
        </div>
      </div>
    </div>
  );
}
