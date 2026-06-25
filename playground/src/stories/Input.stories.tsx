import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "bav-react-ui";

const meta = {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A text input with sizes, an invalid state and an optional left icon." } },
  },
  argTypes: {
    inputSize: { control: "inline-radio", options: ["sm", "md"] },
    invalid: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
  },
  args: { placeholder: "Type here…", inputSize: "md" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Invalid: Story = { args: { invalid: true, value: "not-an-email" } };
export const Disabled: Story = { args: { disabled: true, value: "Read only" } };
