import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegisterPage } from './Register';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/RegisterPage',
  component: RegisterPage,
} as ComponentMeta<typeof RegisterPage>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RegisterPage> = (args) => {
  return <RegisterPage {...args} />;
};
export const Register = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Register.args = {};
