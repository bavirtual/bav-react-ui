import { useEffect, type ReactNode } from "react";
import { useThemeStore } from "./useThemeStore";
import { toCssVars } from "./tokens";

export interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const tokens = useThemeStore((s) => s.tokens);
  const currentTheme = useThemeStore((s) => s.currentTheme);
  const preference = useThemeStore((s) => s.preference);
  const syncSystemTheme = useThemeStore((s) => s.syncSystemTheme);

  useEffect(() => {
    const root = document.documentElement;
    const vars = toCssVars(tokens);
    for (const [name, value] of Object.entries(vars)) {
      root.style.setProperty(name, value);
    }
    root.setAttribute("data-theme", currentTheme);
  }, [tokens, currentTheme]);

  useEffect(() => {
    if (preference !== "system" || typeof window === "undefined" || !window.matchMedia) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    syncSystemTheme();
    const handler = () => syncSystemTheme();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [preference, syncSystemTheme]);

  return <>{children}</>;
}
