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
  // const [bill, setBill] = React.useState('');
  // const [people, setPeople] = React.useState('');
  // const [tip, setTip] = React.useState('');

  //  const [isTipSelected, setIsTipSelected] = React.useState(false);

  // useEffect(() => {
  //   console.log({ bill, people, tip });
  // }, [bill, people, tip]);

  // function calculateTipAmount() {
  //   if(bill > 0 && people > 0 && tip > 0){
  //    setTipAmount(bill * (tip /100));
  //    setTotalTip(tipAmount + bill)
  //   }

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // function handleBillInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   setBill(e.target.value);
  // }

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // function handleSelectedTip(e: React.ChangeEvent<HTMLInputElement>) {
  //   setTip(e.target.value);
  // }
  // function handlePeople(e: React.ChangeEvent<HTMLInputElement>) {
  //   setPeople(e.target.value);
  //   // console.log(e.target.value)
  // }
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [calculatedTip, setCalculatedTip] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  // const [tipAmount, setTipAmount] = React.useState(0);
  // const [totalTip, setTotalTip] = React.useState(0);

  const inputTextBill = parseInt(bill, 10);
  const inputTextPeople = parseInt(people, 10);
  const tipIntNum = parseInt(tip, 10);
  // useEffect(() => {
  //   console.log({ inputTextBill, inputTextPeople, tipIntNum });
  // }, [inputTextBill, inputTextPeople, tipIntNum]);

  useEffect(() => {
    console.log({ inputTextBill, inputTextPeople, tipIntNum });
  }, [inputTextBill, inputTextPeople, tipIntNum]);
  // function calculateTipAmount() {
  //   if (billInt > 0 && peopleInt > 0 && tipInt > 0) {
  //     setTipAmount(billInt * (tipInt / 100));
  //     setTotalTip(TipAmount + billInt);
  //   }
  // }
  function calculateTipAmount() {
    if (inputTextBill > 0 && inputTextPeople > 0 && tipIntNum > 0) {
      setCalculatedTip(inputTextBill * (tipIntNum / 100));
      setTotal(calculatedTip + inputTextBill);
    }
  }

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

  function handleSelectedTip(value: string) {
    console.log(setTip(value));
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
        //  tip={tip}
        //  handleSelectedTip={ handleSelectedTip}
        />
        <p>{tip}</p>
        <InputTextField
          label={'Number Of People'}
          icon={<img src={person} />}
          inputText={people}
          error={checkForErrorInPeople()}
          handleText={handleInputTextForPeople}
        />
      </div>
      <DisplayTip
      //  total={total}
      //  people={people}
      //  calculatedTipAmount={calculatedTipAmount()}
      />
    </div>
  );
};

export default TipCalculator;
