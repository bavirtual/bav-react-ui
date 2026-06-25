import { useEffect, useState } from "react";
import { AlertCircle, AlertTriangle, Info, Smile, X } from "react-feather";
import styles from "./Toast.module.css";
import { useToastStore, type ToastItem, type ToastType } from "./toastStore";

const iconMap: Record<ToastType, typeof AlertCircle> = {
  error: AlertCircle,
  success: Smile,
  info: Info,
  warning: AlertTriangle,
};

function Toast({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleClose = () => {
    setLeaving(true);
    setTimeout(onClose, 280);
  };

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(handleClose, toast.duration);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast.duration]);

  const Icon = iconMap[toast.type];
  const cls = [
    styles.toast,
    styles[toast.type],
    visible ? styles.visible : "",
    leaving ? styles.leaving : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} role="alert">
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <p className={styles.message}>{toast.message}</p>
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Dismiss"
      >
        <X />
      </button>
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} style={{ animationDuration: `${toast.duration}ms` }} />
      </div>
    </div>
  );
}

export function ToastViewport() {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);

  return (
    <div className={styles.viewport}>
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onClose={() => dismiss(t.id)} />
      ))}
    </div>
  );
}
