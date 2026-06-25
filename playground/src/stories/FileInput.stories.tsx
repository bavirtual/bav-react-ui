import type { Meta, StoryObj } from "@storybook/react";
import { FileInput } from "bav-react-ui";

const meta = {
  title: "Inputs/FileInput",
  component: FileInput,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A styled file picker that shows the chosen file name, with an invalid state." } },
  },
  argTypes: { invalid: { control: "boolean" }, placeholder: { control: "text" } },
  args: { placeholder: "Choose a PDF…", accept: "application/pdf" },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Invalid: Story = { args: { invalid: true } };
