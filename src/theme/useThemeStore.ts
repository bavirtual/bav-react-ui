import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themes, type ThemeName, type ThemeTokens } from "./tokens";

export type ThemePreference = ThemeName | "system";

export function getSystemTheme(): ThemeName {
  if (typeof window === "undefined" || !window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(preference: ThemePreference): ThemeName {
  return preference === "system" ? getSystemTheme() : preference;
}

interface ThemeStore {
  preference: ThemePreference;
  currentTheme: ThemeName;
  tokens: ThemeTokens;
  setTheme: (preference: ThemePreference) => void;
  toggleTheme: () => void;
  overrideSystemTheme: (themeName: ThemeName) => void;
  syncSystemTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      preference: "dark",
      currentTheme: "dark",
      tokens: themes.dark,
      setTheme: (preference) => {
        const resolved = resolveTheme(preference);
        set({ preference, currentTheme: resolved, tokens: themes[resolved] });
      },
      toggleTheme: () => {
        const next: ThemeName = get().currentTheme === "dark" ? "light" : "dark";
        set({ preference: next, currentTheme: next, tokens: themes[next] });
      },
      overrideSystemTheme: (themeName: ThemeName) => {
        if (get().preference !== "system") return;
        set({ preference: "system", currentTheme: themeName, tokens: themes[themeName] });
      },
      syncSystemTheme: () => {
        if (get().preference !== "system") return;
        const resolved = getSystemTheme();
        set({ currentTheme: resolved, tokens: themes[resolved] });
      },
    }),
    {
      name: "bav-theme",
      partialize: (state) => ({ preference: state.preference }),
      merge: (persisted, current) => {
        const saved = persisted as
          Partial<{ preference: ThemePreference; currentTheme: ThemeName }> | undefined;
        const preference = saved?.preference ?? saved?.currentTheme ?? current.preference;
        const resolved = resolveTheme(preference);
        return { ...current, preference, currentTheme: resolved, tokens: themes[resolved] };
      },
    },
  ),
);
