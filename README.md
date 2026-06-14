# @bav/ui

The "@bav/ui" design system: a themeable React component library containing buttons, inputs, tables, dialogs, toasts, layout primitives and a
light/dark theme.

## Usage

```tsx
import { ThemeProvider, Button } from "@bav/ui";
import "@bav/ui/styles/global.css";

export const App = () => (
  <ThemeProvider>
    <Button variant="primary">Save</Button>
  </ThemeProvider>
);
```

`ThemeProvider` applies the active theme's CSS variables to `:root`; switch with
`useThemeStore().setTheme("light" | "dark")`.
