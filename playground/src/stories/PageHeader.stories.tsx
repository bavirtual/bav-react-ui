import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeader, Button } from "bav-react-ui";

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: "A page title with an optional description and trailing actions." },
    },
  },
  argTypes: { level: { control: "inline-radio", options: [1, 2, 3, 4, 5] } },
  args: {
    title: "Document Library",
    description: "Use search to find documents",
    level: 2,
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithActions: Story = {
  args: {
    title: "Admin",
    description: "Manage the document library and who can access what.",
    actions: <Button size="sm">Upload</Button>,
  },
};

export const TitleOnly: Story = {
  args: { title: "Settings", description: undefined },
};
