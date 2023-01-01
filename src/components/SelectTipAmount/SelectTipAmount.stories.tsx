import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectTipAmount from './SelectTipAmount';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/SelectTipAmount',
  component: SelectTipAmount,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof SelectTipAmount>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectTipAmount> = (args) => (
  <SelectTipAmount />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
