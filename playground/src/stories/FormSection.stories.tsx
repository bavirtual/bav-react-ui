import type { Meta, StoryObj } from "@storybook/react";
import { FormSection, FormField, Input } from "bav-react-ui";

const meta = {
  title: "Inputs/FormSection",
  component: FormSection,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "A numbered form section with a title, description and optional/required markers, for grouping fields." } },
  },
  argTypes: {
    optional: { control: "boolean" },
    required: { control: "boolean" },
  },
  args: {
    index: 1,
    title: "Personal details",
    description: "Tell us who you are.",
    required: true,
    children: null,
  },
} satisfies Meta<typeof FormSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ maxWidth: 520 }}>
      <FormSection {...args}>
        <FormField label="Full name">
          <Input placeholder="Jane Doe" />
        </FormField>
        <FormField label="Email">
          <Input type="email" placeholder="jane@example.com" />
        </FormField>
      </FormSection>
    </div>
  ),
};

export const Optional: Story = {
  args: { index: 2, title: "Notes", description: undefined, required: false, optional: true },
  render: (args) => (
    <div style={{ maxWidth: 520 }}>
      <FormSection {...args}>
        <FormField label="Anything else?">
          <Input placeholder="Optional notes" />
        </FormField>
      </FormSection>
    </div>
  ),
};
