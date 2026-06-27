import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CodeInput } from "bav-react-ui";

function CodeInputDemo({ length, invalid }: { length?: number; invalid?: boolean }) {
  const [value, setValue] = useState("");
  return <CodeInput value={value} onChange={setValue} length={length} invalid={invalid} />;
}

const meta = {
  title: "Inputs/CodeInput",
  component: CodeInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A segmented input for one-time / verification codes, with paste support and arrow-key navigation between digits.",
      },
    },
  },
  argTypes: {
    length: { control: { type: "number", min: 1, max: 8 } },
    invalid: { control: "boolean" },
  },
  args: { value: "", onChange: () => undefined, length: 6, invalid: false },
} satisfies Meta<typeof CodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <CodeInputDemo length={args.length} invalid={args.invalid} />,
};

export const Invalid: Story = {
  render: () => <CodeInputDemo invalid />,
};
