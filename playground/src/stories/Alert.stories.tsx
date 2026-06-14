import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "bav-react-ui";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["info", "success", "warning", "danger"] },
    title: { control: "text" },
    children: { control: "text" },
  },
  args: {
    tone: "info",
    title: "Heads up",
    children: "This is an informational alert message.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12 }}>
      <Alert {...args} tone="info" title="Info" />
      <Alert {...args} tone="success" title="Success" />
      <Alert {...args} tone="warning" title="Warning" />
      <Alert {...args} tone="danger" title="Danger" />
    </div>
  ),
};
