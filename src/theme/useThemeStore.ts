import { create } from "zustand";
import { persist } from "zustand/middleware";
import { themes, type ThemeName, type ThemeTokens } from "./tokens";

interface ThemeStore {
  currentTheme: ThemeName;
  tokens: ThemeTokens;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      currentTheme: "dark",
      tokens: themes.dark,
      setTheme: (theme) => set({ currentTheme: theme, tokens: themes[theme] }),
      toggleTheme: () => {
        const next: ThemeName = get().currentTheme === "dark" ? "light" : "dark";
        set({ currentTheme: next, tokens: themes[next] });
      },
    }),
    { name: "bav-theme" },
  ),
);
