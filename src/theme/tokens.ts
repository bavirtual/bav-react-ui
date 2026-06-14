export interface ThemeTokens {
  primary: string;
  bg: string;
  panel: string;
  card: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  danger: string;
  success: string;
  warning: string;
  focus: string;
  chipsBackground: string;
  chipsBackgroundActive: string;
  buttons: string;
  shadow: string;
}

export type ThemeName = "dark" | "light";

export const darkTheme: ThemeTokens = {
  primary: "#ffffff",
  bg: "#000000",
  panel: "#111111",
  card: "#1a1a1a",
  border: "#333333",
  text: "#ffffff",
  muted: "#b3b3b3",
  accent: "#60a5fa",
  danger: "#ff4444",
  success: "#4caf50",
  warning: "#f59e0b",
  focus: "rgba(255, 255, 255, 0.3)",
  chipsBackground: "rgba(255, 255, 255, 0.04)",
  chipsBackgroundActive: "rgba(255, 255, 255, 0.12)",
  buttons: "#2a2a2a",
  shadow: "rgba(0, 0, 0, 0.2)",
};

export const lightTheme: ThemeTokens = {
  primary: "#000000",
  bg: "#ffffff",
  panel: "#eeeeee",
  card: "#efefef",
  border: "#bbbbbb",
  text: "#000000",
  muted: "#323232",
  accent: "#2563eb",
  danger: "#ff4444",
  success: "#4caf50",
  warning: "#d97706",
  focus: "rgba(0, 0, 0, 0.25)",
  chipsBackground: "#efefef",
  chipsBackgroundActive: "rgba(0, 0, 0, 0.08)",
  buttons: "#dcdcdc",
  shadow: "rgba(0, 0, 0, 0.12)",
};

export const themes: Record<ThemeName, ThemeTokens> = {
  dark: darkTheme,
  light: lightTheme,
};

const KEY_TO_VAR: Record<keyof ThemeTokens, string> = {
  primary: "--primary",
  bg: "--bg",
  panel: "--panel",
  card: "--card",
  border: "--border",
  text: "--text",
  muted: "--muted",
  accent: "--accent",
  danger: "--danger",
  success: "--success",
  warning: "--warning",
  focus: "--focus",
  chipsBackground: "--chips-background",
  chipsBackgroundActive: "--chips-background-active",
  buttons: "--buttons",
  shadow: "--shadow",
};

export function toCssVars(tokens: ThemeTokens): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of Object.keys(tokens) as (keyof ThemeTokens)[]) {
    out[KEY_TO_VAR[key]] = tokens[key];
  }
  return out;
}
