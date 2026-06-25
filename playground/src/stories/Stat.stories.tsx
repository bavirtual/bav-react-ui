import type { Meta, StoryObj } from "@storybook/react";
import { Stat } from "bav-react-ui";

const meta = {
  title: "Data display/Stat",
  component: Stat,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A compact metric with a label, value and optional delta and trend." } },
  },
  argTypes: { trend: { control: "inline-radio", options: [undefined, "up", "down"] } },
  args: {
    label: "Total flights",
    value: "1,284",
    delta: "+12%",
    trend: "up",
    hint: "vs. last month",
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Down: Story = {
  args: { label: "Cancellations", value: "37", delta: "-4%", trend: "down" },
};
