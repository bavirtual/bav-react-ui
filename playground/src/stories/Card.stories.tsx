import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "bav-react-ui";

const meta = {
  title: "Surfaces/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible content surface with optional CardHeader, CardBody and CardFooter parts; can be made interactive.",
      },
    },
  },
  argTypes: { interactive: { control: "boolean" } },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardHeader title="Flight BA117" subtitle="EGLL → KJFK" />
      <CardBody>Boeing 777-300ER · 7h 35m · departs 18:40Z</CardBody>
      <CardFooter>
        <Button variant="primary" size="sm">
          Book
        </Button>
      </CardFooter>
    </Card>
  ),
};
