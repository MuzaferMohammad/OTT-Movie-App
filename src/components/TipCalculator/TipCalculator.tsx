/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { InputTextField } from '../InputTextField/InputTextField';
import TipSelectionButton from '../TipSelectionButton.tsx/TipSelectionButton';
import DisplayTip from '../DisplayTip/DisplayTip';
import './TipCalculator.css';
import React, { useEffect } from 'react';
import dollar from '../../assets/dollor.svg';
import person from '../../assets/person.svg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TipCalculator = () => {
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [customValue, setCustom] = React.useState('');
  const [tipAmount, setTipAmount] = React.useState(0);
  const [totalTip, setTotalTip] = React.useState(0);

  function handleSelectedTip(value: string) {
    setTip(value);
  }

  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const regexForCustom = /^\d*\.?\d*$/;
    if (e.target.value === '' || regexForCustom.test(e.target.value)) {
      setCustom(e.target.value);
    }
  }

  const inputTextBill = parseFloat(bill);
  const inputTextPeople = parseInt(people, 10);
  const tipIntNum = parseFloat(tip);

  useEffect(() => {
    console.log({ inputTextBill, inputTextPeople, tipIntNum });
  }, [inputTextBill, inputTextPeople, tipIntNum]);

  const calculatedTip = (inputTextBill * (tipIntNum / 100)) / inputTextPeople;
  const total = inputTextBill / inputTextPeople + calculatedTip;

  function checkForErrorInBill() {
    return bill === '0' ? 'can not be zero' : null;
  }

  function handleInputTextForBill(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForBill = /^\d*\.?\d*$/;
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

  function handleResetBtn() {
    setBill('');
    setPeople('');
    setTip('');
    setCustom('');
    setTipAmount(0);
    setTotalTip(0);
  }

  return (
    <div className="tip-calculator">
      <div className="input-container">
        <InputTextField
          label={'Bill'}
          icon={<img src={dollar} />}
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
      <div className="display-tip-container">
        <DisplayTip
          tipAmount={calculatedTip}
          totalTip={total}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
};

export default TipCalculator;
