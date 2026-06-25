import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "bav-react-ui";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "An indeterminate loading indicator at any size." } },
  },
  argTypes: { size: { control: { type: "range", min: 12, max: 64, step: 2 } } },
  args: { size: 24 },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
