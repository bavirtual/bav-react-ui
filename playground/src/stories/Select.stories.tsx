import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "bav-react-ui";

const options = [
  { label: "Boeing 737", value: "b737" },
  { label: "Airbus A320", value: "a320" },
  { label: "Boeing 777", value: "b777", disabled: true },
];

const meta = {
  title: "Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A native select styled to match the design system, with sizes and an invalid state.",
      },
    },
  },
  argTypes: {
    selectSize: { control: "inline-radio", options: ["sm", "md"] },
    invalid: { control: "boolean" },
  },
  args: { options, placeholder: "Pick an aircraft", selectSize: "md" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Invalid: Story = { args: { invalid: true } };
