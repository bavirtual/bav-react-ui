import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "bav-react-ui";
import { Trash2 } from "react-feather";

const meta = {
  title: "Inputs/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A compact, icon-only button (requires an accessible label) in several sizes and variants.",
      },
    },
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["ghost", "solid", "danger"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    label: { control: "text" },
  },
  args: { label: "Delete", variant: "ghost", size: "md", children: <Trash2 size={16} /> },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <IconButton {...args} variant="ghost" />
      <IconButton {...args} variant="solid" />
      <IconButton {...args} variant="danger" />
    </div>
  ),
};
