import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

type GapToken = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
const gapVar = (g: GapToken): string => (g === 0 ? "0" : `var(--space-${g})`);

interface BaseProps extends HTMLAttributes<HTMLElement> {
  gap?: GapToken;
  as?: ElementType;
  children?: ReactNode;
}

interface StackProps extends BaseProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
}

export function Stack({
  gap = 3,
  align,
  justify,
  as: As = "div",
  style,
  children,
  ...rest
}: StackProps) {
  return (
    <As
      style={{
        display: "flex",
        flexDirection: "column",
        gap: gapVar(gap),
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}

interface InlineProps extends BaseProps {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
}

export function Inline({
  gap = 2,
  align = "center",
  justify,
  wrap = false,
  as: As = "div",
  style,
  children,
  ...rest
}: InlineProps) {
  return (
    <As
      style={{
        display: "flex",
        flexDirection: "row",
        gap: gapVar(gap),
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
