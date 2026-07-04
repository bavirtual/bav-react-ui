import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Preview, Decorator } from "@storybook/react-vite";
import { themes, toCssVars, getSystemTheme, type ThemePreference } from "bav-react-ui";
import { storybookDark } from "./theme";

function subscribeSystemTheme(onChange: () => void) {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function useResolvedTheme(preference: ThemePreference) {
  const systemTheme = useSyncExternalStore(
    subscribeSystemTheme,
    getSystemTheme,
    () => "dark" as const,
  );
  return preference === "system" ? systemTheme : preference;
}

function ThemedFrame({
  preference,
  fullHeight,
  children,
}: {
  preference: ThemePreference;
  fullHeight: boolean;
  children: ReactNode;
}) {
  const theme = useResolvedTheme(preference);

  useEffect(() => {
    const tokens = themes[theme];
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (!tokens) return;
    for (const [name, value] of Object.entries(toCssVars(tokens))) {
      root.style.setProperty(name, value);
    }
  }, [theme]);

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        padding: 24,
        ...(fullHeight ? { minHeight: "100vh" } : { borderRadius: 8 }),
      }}
    >
      {children}
    </div>
  );
}

const withTheme: Decorator = (Story, context) => (
  <ThemedFrame
    preference={(context.globals.theme as ThemePreference | undefined) ?? "dark"}
    fullHeight={context.viewMode !== "docs"}
  >
    <Story />
  </ThemedFrame>
);

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    options: {
      storySort: { order: ["Overview", "*"] },
    },
    docs: {
      theme: storybookDark,
    },
  },
  globalTypes: {
    theme: {
      description: "Component theme",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
