import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TipSelectionButton from './TipSelectionButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/TipSelectionButton',
  component: TipSelectionButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof TipSelectionButton>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TipSelectionButton> = (args) => (
  <TipSelectionButton />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
