import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NumberOfPeople } from './NumberOfPeople';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/NumberOfPeople',
  component: NumberOfPeople,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof NumberOfPeople>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberOfPeople> = (args) => (
  <NumberOfPeople />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
