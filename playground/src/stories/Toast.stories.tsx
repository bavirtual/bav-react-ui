import type { Meta, StoryObj } from "@storybook/react";
import { ToastViewport, toast, Button } from "bav-react-ui";

const meta = {
  title: "Feedback/Toast",
  component: ToastViewport,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Transient notifications fired imperatively via toast.*; render <ToastViewport /> once near the app root.",
      },
    },
  },
} satisfies Meta<typeof ToastViewport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button onClick={() => toast.success("Flight booked")}>Success</Button>
      <Button onClick={() => toast.error("Booking failed")}>Error</Button>
      <Button onClick={() => toast.info("Dispatch saved")}>Info</Button>
      <Button onClick={() => toast.warning("Weather below minimums")}>Warning</Button>
      <ToastViewport />
    </div>
  ),
};
