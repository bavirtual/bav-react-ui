import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

export type FlexGap = "small" | "middle" | "large" | number;

const GAP_PRESET: Record<string, number> = { small: 8, middle: 16, large: 24 };

export interface FlexProps extends HTMLAttributes<HTMLElement> {
  vertical?: boolean;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: FlexGap;
  wrap?: boolean;
  flex?: CSSProperties["flex"];
  as?: ElementType;
  children?: ReactNode;
}

export function Flex({
  vertical,
  align,
  justify,
  gap,
  wrap,
  flex,
  as: As,
  style,
  children,
  ...rest
}: FlexProps) {
  const gapValue = typeof gap === "string" ? GAP_PRESET[gap] : gap;
  return (
    <As
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        alignItems: align,
        justifyContent: justify,
        gap: gapValue,
        flexWrap: wrap ? "wrap" : undefined,
        flex,
        minWidth: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
