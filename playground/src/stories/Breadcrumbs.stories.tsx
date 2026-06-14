import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "bav-react-ui";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
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
