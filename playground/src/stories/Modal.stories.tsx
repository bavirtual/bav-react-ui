import { useState, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal, Button } from "bav-react-ui";

function ModalDemo(args: ComponentProps<typeof Modal>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        title="Cancel booking?"
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Keep
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Cancel booking
            </Button>
          </>
        }
      >
        This releases the aircraft and discards your dispatch sheet.
      </Modal>
    </>
  );
}

const meta = {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A centered dialog with a title, body and footer; dismissible, with sizes and a compact mode.",
      },
    },
  },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md", "lg"] } },
  args: { open: false, onClose: () => undefined },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { render: (args) => <ModalDemo {...args} /> };
