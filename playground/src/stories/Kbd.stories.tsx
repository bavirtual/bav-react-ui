import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "bav-react-ui";

const meta = {
  title: "Data display/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Renders a keyboard key or shortcut." } },
  },
  argTypes: { children: { control: "text" } },
  args: { children: "⌘K" },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Combo: Story = {
  render: () => (
    <span style={{ display: "inline-flex", gap: 4 }}>
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </span>
  ),
};
