import type { Meta, StoryObj } from "@storybook/react";
import { ScrollFade } from "bav-react-ui";

const meta = {
  title: "Layout/ScrollFade",
  component: ScrollFade,
  tags: ["autodocs"],
  args: { children: null },
} satisfies Meta<typeof ScrollFade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div style={{ height: 240, display: "flex", maxWidth: 360 }}>
      <ScrollFade>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 16 }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              style={{
                padding: 12,
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
              }}
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </ScrollFade>
    </div>
  ),
};
