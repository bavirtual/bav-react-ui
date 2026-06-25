import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState, Button } from "bav-react-ui";
import { Inbox } from "react-feather";

const meta = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A placeholder for empty screens — an icon, title, description and optional actions." } },
  },
  args: {
    icon: <Inbox size={32} />,
    title: "No documents yet",
    description: "Upload a PDF to get started.",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const WithAction: Story = { args: { actions: <Button variant="primary">Upload</Button> } };
