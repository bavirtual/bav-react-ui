import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "bav-react-ui";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: { orientation: { control: "inline-radio", options: ["horizontal", "vertical"] } },
  args: { orientation: "horizontal" },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <p>Above</p>
      <Divider {...args} />
      <p>Below</p>
    </div>
  ),
};
export const WithLabel: Story = {
  args: { children: "OR" },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Divider {...args} />
    </div>
  ),
};
