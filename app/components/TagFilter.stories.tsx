import { within, userEvent } from '@storybook/testing-library';
import { TagFilter } from '@/components/TagFilter';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TagFilter> = {
  title: 'Components/TagFilter',
  component: TagFilter,
  tags: ['autodocs'],
  argTypes: {
    onFilterChange: { action: 'filter changed' },
  },
};

export default meta;

type Story = StoryObj<typeof TagFilter>;

export const Default: Story = {};

export const ClickReactTag: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const reactTagButton = await canvas.getByText('React');
    await userEvent.click(reactTagButton);
  },
};
