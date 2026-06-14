import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "bav-react-ui";

const meta = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    label: { control: "text" },
    showValue: { control: "boolean" },
  },
  args: { value: 60, size: "md", label: "Uploading", showValue: true },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Indeterminate: Story = { args: { value: null, label: "Working…", showValue: false } };
