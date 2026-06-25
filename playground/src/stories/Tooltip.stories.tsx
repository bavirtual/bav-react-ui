import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "bav-react-ui";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A small popover label shown on hover or focus, in four placements." } },
  },
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

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 48, padding: 60, flexWrap: "wrap" }}>
      {(["top", "bottom", "left", "right"] as const).map((p) => (
        <Tooltip key={p} placement={p} label={`Tooltip on ${p}`}>
          <Button>{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
