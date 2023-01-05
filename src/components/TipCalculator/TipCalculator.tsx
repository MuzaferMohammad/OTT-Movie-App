/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { InputTextField } from '../InputTextField/InputTextField';
import TipSelection from '../TipSelection/TipSelection';
import TipSelectionButton from '../TipSelectionButton.tsx/TipSelectionButton';
import DisplayTip from '../DisplayTip/DisplayTip';
import './TipCalculator.css';
import React, { useEffect } from 'react';
import dollor from '../../../assets/dollor.svg';
import person from '../../../assets/person.svg';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TipCalculator = () => {
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [customValue, setCustom] = React.useState('');

  function handleSelectedTip(value: string) {
    setTip(value);
  }

  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const regexForCustom = /^[0-9]+$/;
    if (e.target.value === '' || regexForCustom.test(e.target.value)) {
      setCustom(e.target.value);
    }
  }
  // console.log(tip);

  const inputTextBill = parseInt(bill, 10);
  const inputTextPeople = parseInt(people, 10);
  const tipIntNum = parseInt(tip, 10);

  useEffect(() => {
    console.log({ inputTextBill, inputTextPeople, tipIntNum });
  }, [inputTextBill, inputTextPeople, tipIntNum]);

  const calculatedTip = (inputTextBill * (tipIntNum / 100)) / inputTextPeople;
  const total = inputTextBill / inputTextPeople + calculatedTip;

  function checkForErrorInBill() {
    return bill === '0' ? 'can not be zero' : null;
  }
  function handleInputTextForBill(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForBill = /^[0-9]+$/;
    if (event.target.value === '' || regexForBill.test(event.target.value)) {
      setBill(event.target.value);
    }
  }
  function checkForErrorInPeople() {
    return people === '0' ? 'can not be zero' : null;
  }
  function handleInputTextForPeople(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const regexForPeople = /^[0-9]+$/;
    if (event.target.value === '' || regexForPeople.test(event.target.value)) {
      setPeople(event.target.value);
    }
  }

  return (
    <div className="Tip-calculator">
      <div>
        <InputTextField
          label={'Bill'}
          icon={<img src={dollor} />}
          inputText={bill}
          error={checkForErrorInBill()}
          handleText={handleInputTextForBill}
        />
        <TipSelectionButton
          handleSelectedTip={handleSelectedTip}
          handleCustomInput={handleCustomInput}
          customValue={customValue}
          tip={tip}
        />

        <InputTextField
          label={'Number Of People'}
          icon={<img src={person} />}
          inputText={people}
          error={checkForErrorInPeople()}
          handleText={handleInputTextForPeople}
        />
      </div>
      <DisplayTip tipAmount={calculatedTip} totalTip={total} />
    </div>
  );
};

export default TipCalculator;
