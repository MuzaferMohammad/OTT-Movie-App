import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dollor from '../../../assets/dollor.svg';
import person from '../../../assets/person.svg';
import { InputTextField } from './InputTextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/InputTextField',
  component: InputTextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof InputTextField>;
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputTextField> = (args) => {
  const [inputText, setInputText] = React.useState('');

  function handleInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);
  }

  function checkForError() {
    return inputText === '0' ? 'cannot be zero' : null;
  }
  return (
    <InputTextField
      {...args}
      inputText={inputText}
      error={checkForError()}
      handleText={handleInputText}
    />
  );
};

export const InputBill = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputBill.args = {
  label: 'Bill',
  icon: <img src={dollor} />,
};

export const InputNumberOfPeople = Template.bind({});
InputNumberOfPeople.args = {
  label: 'Number of People',
  icon: <img src={person} />,
};

// eslint-disable-next-line storybook/prefer-pascal-case
export const showBillAmtError = Template.bind({});
showBillAmtError.args = {
  label: 'Bill',
  icon: <img src={dollor} />,
  error: 'Error occured',
};

// eslint-disable-next-line storybook/prefer-pascal-case
export const showError = Template.bind({});
showError.args = {
  label: 'Number of People',
  icon: <img src={person} />,
  inputText: '0',
  error: 'Error occured',
};
