import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Input } from "bav-react-ui";

const meta = {
  title: "Inputs/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Wraps a control with a label, hint and error message, wiring up the accessibility attributes." } },
  },
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
  },
  args: {
    label: "Email",
    hint: "We'll never share it.",
    children: <Input placeholder="you@example.com" />,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const WithError: Story = {
  args: {
    error: "That email is already taken",
    children: <Input defaultValue="taken@example.com" invalid />,
  },
};
