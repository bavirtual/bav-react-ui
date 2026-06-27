import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "bav-react-ui";

const meta = {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A toggle for on/off settings, with an optional label." } },
  },
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    children: { control: "text" },
    onChange: { action: "change" },
  },
  args: { children: "Enable notifications" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const On: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
