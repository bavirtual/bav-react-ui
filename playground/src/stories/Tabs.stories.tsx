import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "bav-react-ui";

const items = [
  { value: "overview", label: "Overview" },
  { value: "pireps", label: "PIREPs", count: 12 },
  { value: "fleet", label: "Fleet" },
  { value: "archived", label: "Archived", disabled: true },
];

function TabsDemo() {
  const [value, setValue] = useState("overview");
  return <Tabs items={items} value={value} onChange={setValue} />;
}

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Switches between views, with optional counts, disabled tabs and a fitted layout.",
      },
    },
  },
  args: { items, value: "overview", onChange: () => undefined },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { render: () => <TabsDemo /> };
