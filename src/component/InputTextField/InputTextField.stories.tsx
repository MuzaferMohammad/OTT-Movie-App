import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputTextField } from './InputTextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/InputTextField',
  component: InputTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof InputTextField>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextField> = (args) => (
  <InputTextField />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
