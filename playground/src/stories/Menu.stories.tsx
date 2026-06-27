import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuItem, MenuSeparator, Button } from "bav-react-ui";
import { Edit2, Copy, Trash2 } from "react-feather";

const meta = {
  title: "Overlays/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A dropdown menu of actions, with items, separators, labels, icons and a danger variant.",
      },
    },
  },
  args: { trigger: <Button>Actions ▾</Button>, children: <MenuItem>Edit</MenuItem> },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Menu trigger={<Button>Actions ▾</Button>}>
      <MenuItem icon={<Edit2 size={14} />}>Edit</MenuItem>
      <MenuItem icon={<Copy size={14} />}>Duplicate</MenuItem>
      <MenuSeparator />
      <MenuItem icon={<Trash2 size={14} />} danger>
        Delete
      </MenuItem>
    </Menu>
  ),
};
