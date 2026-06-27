import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConfirmDialog, confirm, Button } from "bav-react-ui";

const meta = {
  title: "Overlays/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A global confirmation dialog driven imperatively by confirm({...}). Mount <ConfirmDialog /> once near the app root.",
      },
    },
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div>
      <Button
        variant="danger"
        onClick={() =>
          confirm({
            title: "Delete document?",
            message: "This permanently removes the PDF and its metadata.",
            confirmText: "Delete",
            danger: true,
            onConfirm: () => undefined,
          })
        }
      >
        Delete document
      </Button>
      <ConfirmDialog />
    </div>
  ),
};
