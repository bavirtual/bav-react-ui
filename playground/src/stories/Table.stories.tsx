import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty,
} from "bav-react-ui";

const meta = {
  title: "Data display/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A data table built from header/body/row/cell parts; supports compact and clickable rows, numeric and mono cells, and an empty state.",
      },
    },
  },
  argTypes: { compact: { control: "boolean" }, clickableRows: { control: "boolean" } },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { fn: "BA117", from: "EGLL", to: "KJFK", dist: 3008 },
  { fn: "BA286", from: "KSFO", to: "EGLL", dist: 4688 },
];

export const Playground: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Flight</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead numeric>Distance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.fn}>
            <TableCell mono>{r.fn}</TableCell>
            <TableCell>{r.from}</TableCell>
            <TableCell>{r.to}</TableCell>
            <TableCell numeric>{r.dist} nm</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Flight</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmpty colSpan={3}>No flights scheduled.</TableEmpty>
      </TableBody>
    </Table>
  ),
};
