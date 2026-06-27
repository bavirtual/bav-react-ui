import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "bav-react-ui";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Loading placeholders — text lines, rectangles or circles — to reduce layout shift.",
      },
    },
  },
  argTypes: { variant: { control: "inline-radio", options: ["rect", "text", "circle"] } },
  args: { variant: "rect", width: 240, height: 16 },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const TextLines: Story = { args: { variant: "text", lines: 3, width: 320 } };
export const Circle: Story = { args: { variant: "circle", width: 48 } };
