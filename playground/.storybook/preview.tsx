import { useEffect, type ReactNode } from "react";
import type { Preview, Decorator } from "@storybook/react";
import { themes, toCssVars, type ThemeName } from "bav-react-ui"

function ThemedFrame({ theme, children }: { theme: ThemeName; children: ReactNode }) {
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
      <div style={{ background: "var(--bg)", color: "var(--text)", padding: 24, minHeight: "100vh" }}>
        {children}
      </div>
  );
}

const withTheme: Decorator = (Story, context) => (
    <ThemedFrame theme={(context.globals.theme as ThemeName | undefined) ?? "dark"}>
      <Story />
    </ThemedFrame>
);

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
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
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
