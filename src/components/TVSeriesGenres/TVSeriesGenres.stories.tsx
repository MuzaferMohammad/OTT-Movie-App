import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TVSeriesGenres } from './TVSeriesGenres';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/TVSeriesGenres',
  component: TVSeriesGenres,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TVSeriesGenres>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TVSeriesGenres> = (args) => (
  <TVSeriesGenres />
);

export const TVSeriesGenre = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TVSeriesGenre.args = {};
