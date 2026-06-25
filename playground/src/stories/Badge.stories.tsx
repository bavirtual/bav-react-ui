import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "bav-react-ui";

const meta = {
  title: "Data display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A small status label in tones like neutral, accent, success, warning or danger; supports dot, mono and square styles." } },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "accent", "success", "warning", "danger"],
    },
    square: { control: "boolean" },
    mono: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Badge", tone: "neutral" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge {...args} tone="neutral">
        neutral
      </Badge>
      <Badge {...args} tone="accent">
        accent
      </Badge>
      <Badge {...args} tone="success">
        success
      </Badge>
      <Badge {...args} tone="warning">
        warning
      </Badge>
      <Badge {...args} tone="danger">
        danger
      </Badge>
    </div>
  ),
};
