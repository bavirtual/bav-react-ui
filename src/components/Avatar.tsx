import { cx } from "../utils/cx";
import styles from "./Avatar.module.css";

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  square?: boolean;
  className?: string;
}

const initials = (name?: string): string => {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).slice(0, 2);
};

export function Avatar({ name, src, size, square, className }: AvatarProps) {
  return (
    <span
      className={cx(styles.avatar, styles[size], square && styles.square, className)}
      aria-label={name}
      title={name}
    >
      {src ? <img className={styles.img} src={src} alt={name ?? ""} /> : initials(name)}
    </span>
  );
}
