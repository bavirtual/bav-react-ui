import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "bav-react-ui";

const meta = {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Shows a user's image, or their initials as a fallback, in several sizes and an optional square shape.",
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    src: { control: "text" },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    square: { control: "boolean" },
  },
  args: { name: "Ada Lovelace", size: "md" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};
