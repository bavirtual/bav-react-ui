import type { CSSProperties } from "react";
import { cx } from "../utils/cx";
import styles from "./Skeleton.module.css";

export interface SkeletonProps {
  variant?: "rect" | "text" | "circle";
  width?: number | string;
  height?: number | string;
  lines?: number;
  radius?: number | string;
  className?: string;
}

export function Skeleton({
  variant,
  width,
  height,
  lines,
  radius,
  className,
}: SkeletonProps) {
  const style: CSSProperties = {
    width,
    height: height ?? (variant === "circle" ? width : undefined),
    borderRadius: radius,
  };

  if (variant === "text" && lines > 1) {
    return (
      <span>
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className={cx(styles.skeleton, styles.text, className)}
            style={{ width: i === lines - 1 ? "70%" : "100%" }}
          />
        ))}
      </span>
    );
  }

  return (
    <span
      className={cx(
        styles.skeleton,
        variant === "text" && styles.text,
        variant === "circle" && styles.circle,
        className,
      )}
      style={style}
    />
  );
}
