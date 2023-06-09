// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () =>  <Button btnType="primary"> primary button </Button>,
};