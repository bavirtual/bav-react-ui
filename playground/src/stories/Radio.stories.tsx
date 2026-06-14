import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "bav-react-ui";

const options = [
  { label: "Economy", value: "economy" },
  { label: "Business", value: "business" },
  { label: "First", value: "first", disabled: true },
];

function RadioGroupDemo() {
  const [value, setValue] = useState("economy");
  return <RadioGroup name="cabin" value={value} options={options} onChange={setValue} />;
}

const meta = {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: { name: "cabin", options },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { render: () => <RadioGroupDemo /> };
