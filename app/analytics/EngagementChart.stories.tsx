import EngagementChart from '@/analytics/EngagementChart';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EngagementChart> = {
  title: 'Analytics/EngagementChart',
  component: EngagementChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EngagementChart>;

export const Default: Story = {};
