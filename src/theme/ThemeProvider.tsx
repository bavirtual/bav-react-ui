import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "./useThemeStore";
import { toCssVars } from "./tokens";

export interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const tokens = useThemeStore((s) => s.tokens);
  const currentTheme = useThemeStore((s) => s.currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    const vars = toCssVars(tokens);
    for (const [name, value] of Object.entries(vars)) {
      root.style.setProperty(name, value);
    }
    root.setAttribute("data-theme", currentTheme);
  }, [tokens, currentTheme]);

  return <>{children}</>;
}
