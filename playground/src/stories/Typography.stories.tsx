import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title, Text, Paragraph } from "bav-react-ui";

const meta = {
  title: "Data display/Typography",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Title, Text and Paragraph for headings and body copy, with tones, sizes and inline emphasis.",
      },
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
  render: () => (
    <div>
      <Title level={1}>Title level 1</Title>
      <Title level={3}>Title level 3</Title>
      <Paragraph>
        A paragraph of body copy with a <Text type="accent">accent</Text> and a{" "}
        <Text type="danger">danger</Text> inline span.
      </Paragraph>
      <Text type="secondary" size="sm">
        Secondary small text
      </Text>
    </div>
  ),
};
