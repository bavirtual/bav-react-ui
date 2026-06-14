import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "bav-react-ui";

const meta = {
  title: "Data display/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: { children: { control: "text" }, onRemove: { action: "remove" } },
  args: { children: "EGLL" },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Removable: Story = { args: { onRemove: () => undefined } };
