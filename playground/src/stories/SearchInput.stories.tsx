import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "bav-react-ui";

function SearchInputDemo() {
  const [value, setValue] = useState("");
  return (
    <SearchInput
      value={value}
      onValueChange={setValue}
      placeholder="Search documents"
      shortcut="/"
    />
  );
}

const meta = {
  title: "Inputs/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  args: { value: "", onValueChange: () => undefined },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { render: () => <SearchInputDemo /> };
