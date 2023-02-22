import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieGenres } from './MovieGenres';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/MovieGenres',
  component: MovieGenres,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MovieGenres>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieGenres> = (args) => <MovieGenres />;

export const MovieGenre = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MovieGenre.args = {};
