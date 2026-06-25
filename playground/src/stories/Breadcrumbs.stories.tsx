import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "bav-react-ui";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Shows the path to the current page as a trail of links." } },
  },
  args: {
    items: [
      { title: "Home", href: "/" },
      { title: "Documents", href: "/documents" },
      { title: "Operations Manual" },
    ],
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
