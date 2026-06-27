import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "bav-react-ui";

function PaginationDemo() {
  const [page, setPage] = useState(3);
  return (
    <Pagination page={page} pageCount={10} onChange={setPage} totalItems={200} pageSize={20} />
  );
}

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: "Page navigation for long lists, with page counts and totals." },
    },
  },
  args: { page: 1, pageCount: 10, onChange: () => undefined },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { render: () => <PaginationDemo /> };
