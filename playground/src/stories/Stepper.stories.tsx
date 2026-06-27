import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "bav-react-ui";

const steps = [
  { n: 1, label: "Email check" },
  { n: 2, label: "Confirm email" },
  { n: 3, label: "Apply or reactivate" },
];

const meta = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A horizontal progress indicator for multi-step flows." } },
  },
  argTypes: { current: { control: { type: "number", min: 1, max: 3 } } },
  args: { steps, current: 2 },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 560 }}>
      <Stepper {...args} />
    </div>
  ),
};

export const Completed: Story = {
  args: { current: 4 },
  render: (args) => (
    <div style={{ maxWidth: 560 }}>
      <Stepper {...args} />
    </div>
  ),
};
