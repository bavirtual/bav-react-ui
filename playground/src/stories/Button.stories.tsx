import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "bav-react-ui";

const meta = {
  title: "Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "The primary action trigger, with variants, sizes, a loading state and optional left/right icons." } },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "danger", "subtle", "ghost"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    block: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "click" },
  },
  args: { children: "Button", variant: "primary", size: "md" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="danger">
        Danger
      </Button>
      <Button {...args} variant="subtle">
        Subtle
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Loading: Story = { args: { loading: true } };
