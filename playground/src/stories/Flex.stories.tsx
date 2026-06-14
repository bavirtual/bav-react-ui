import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Button } from "bav-react-ui";

const meta = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    vertical: { control: "boolean" },
    wrap: { control: "boolean" },
    gap: { control: "select", options: ["small", "middle", "large"] },
  },
  args: { gap: "middle" },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Flex {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Flex>
  ),
};
