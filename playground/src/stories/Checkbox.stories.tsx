import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "bav-react-ui";

const meta = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A labelled checkbox for boolean or multi-select choices, including an indeterminate state." } },
  },
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Remember me" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
