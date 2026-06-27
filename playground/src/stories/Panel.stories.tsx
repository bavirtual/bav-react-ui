import type { Meta, StoryObj } from "@storybook/react";
import { Panel, Button } from "bav-react-ui";

const meta = {
  title: "Surfaces/Panel",
  component: Panel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A titled content surface with an optional header, actions and flush/headerless modes.",
      },
    },
  },
  argTypes: { flush: { control: "boolean" }, disableHeader: { control: "boolean" } },
  args: { headerTitle: "Dispatch", headerActions: <Button size="sm">Save</Button> },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <Panel {...args}>Flight level, route and fuel settings go here.</Panel>
    </div>
  ),
};
