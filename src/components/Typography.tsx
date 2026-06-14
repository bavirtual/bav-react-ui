import type { ElementType, HTMLAttributes } from "react";
import { cx } from "../utils/cx";
import styles from "./Typography.module.css";

export type TextTone = "default" | "secondary" | "success" | "warning" | "danger" | "accent";
export type TextSize = "xs" | "sm" | "md" | "lg";

const toneClass: Record<TextTone, string | undefined> = {
  default: undefined,
  secondary: styles.secondary,
  success: styles.success,
  warning: styles.warning,
  danger: styles.danger,
  accent: styles.accent,
};

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5;
  type?: TextTone;
  noMargin?: boolean;
}

export function Title({ level, type, noMargin, className, ...rest }: TitleProps) {
  const Tag = `h${level}` as ElementType;
  return (
    <Tag
      className={cx(
        styles.title,
        styles[`h${level}` as keyof typeof styles],
        toneClass[type!],
        noMargin && styles.noMargin,
        className,
      )}
      {...rest}
    />
  );
}

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  type?: TextTone;
  size?: TextSize;
  strong?: boolean;
  code?: boolean;
  mono?: boolean;
  uppercase?: boolean;
}

export function Text({
  type,
  size,
  strong,
  code,
  mono,
  uppercase,
  className,
  ...rest
}: TextProps) {
  return (
    <span
      className={cx(
        styles.text,
        toneClass[type!],
        size !== "md" && styles[size!],
        strong && styles.strong,
        code && styles.code,
        mono && styles.mono,
        uppercase && styles.uppercase,
        className,
      )}
      {...rest}
    />
  );
}

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: TextTone;
}

export function Paragraph({ type, className, ...rest }: ParagraphProps) {
  return <p className={cx(styles.paragraph, toneClass[type!], className)} {...rest} />;
}

export const Typography = { Title, Text, Paragraph };
