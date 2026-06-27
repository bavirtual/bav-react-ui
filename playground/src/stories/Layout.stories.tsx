import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Inline, Button } from "bav-react-ui";

const meta = {
  title: "Layout/Stack & Inline",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Stack (vertical) and Inline (horizontal) spacing primitives built on the design system's spacing scale.",
      },
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalStack: Story = {
  render: () => (
    <Stack gap={3}>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Stack>
  ),
};
export const HorizontalInline: Story = {
  render: () => (
    <Inline gap={2}>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Inline>
  ),
};
