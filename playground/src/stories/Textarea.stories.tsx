import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "bav-react-ui";

const meta = {
  title: "Inputs/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: { invalid: { control: "boolean" }, disabled: { control: "boolean" } },
  args: { placeholder: "Write a note…", rows: 4 },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Invalid: Story = { args: { invalid: true, defaultValue: "Too short" } };
