import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionList } from "bav-react-ui";

const meta = {
  title: "Data display/DescriptionList",
  component: DescriptionList,
  tags: ["autodocs"],
  argTypes: { wide: { control: "boolean" } },
  args: {
    items: [
      { label: "Callsign", value: "SHT1A", mono: true },
      { label: "Aircraft", value: "A320neo" },
      { label: "Registration", value: "G-TTNA", mono: true },
    ],
  },
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
