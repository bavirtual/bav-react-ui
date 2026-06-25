# bav-react-ui

A themeable React component library — buttons, inputs, tables, dialogs, toasts,
layout primitives and a built-in light/dark theme.

**📖 Full docs, theming guide and live component browser:
[bavirtual.github.io/bav-react-ui](https://bavirtual.github.io/bav-react-ui/)**

## Install

```bash
npm install bav-react-ui react react-dom
```

(`react` and `react-dom` are peer dependencies, `zustand` ships with the package.)

## Quick start

```tsx
import { ThemeProvider, ToastViewport, ConfirmDialog, Button } from "bav-react-ui";

export function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Save changes</Button>

      {/* mount once for the toast() / confirm() helpers */}
      <ToastViewport />
      <ConfirmDialog />
    </ThemeProvider>
  );
}
```

Theming, the full component catalog and usage examples live in the
[documentation](https://bavirtual.github.io/bav-react-ui/).

## Development

```bash
bun install
bun run build            # build the library to dist/
bun run playground:dev   # Storybook on :5175
```
