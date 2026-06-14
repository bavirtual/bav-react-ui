import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "bav-react-ui";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "inline-radio", options: ["top", "bottom", "left", "right"] },
    label: { control: "text" },
  },
  args: {
    label: "Files a PIREP and clears the booking",
    placement: "top",
    children: <Button>Complete flight</Button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <div style={{ padding: 40 }}>{<Tooltip {...args} />}</div>,
};
