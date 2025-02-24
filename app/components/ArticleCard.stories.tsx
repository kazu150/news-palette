import { ArticleCard } from '@/components/ArticleCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleCard> = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  argTypes: {
    article: {
      control: 'object',
      description: '表示する記事情報',
      defaultValue: {
        id: 1,
        post_type: 'Article',
        title: 'React 18の新機能について', // 🟢 ここが undefined になっている可能性あり
        emoji: '⚛️',
        
        path: '/articles/react18',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

// デフォルトストーリーの設定
export const Default: Story = {
  args: {
    article: {
      id: 1,
      post_type: 'Article',
      title: 'React 18の新機能について',
      emoji: '⚛️',
      path: '/articles/react18',
    },
  },
};
