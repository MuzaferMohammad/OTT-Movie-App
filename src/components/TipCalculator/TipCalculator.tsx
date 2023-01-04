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
  const [inputText, setInputText] = React.useState('');
  const [tip, setTip] = React.useState('');
  const [tipAmount, setTipAmount] = React.useState(0);
  const [totalTip, setTotalTip] = React.useState(0);

  const inputTextBill = parseInt(inputText, 10);
  const inputTextPeople = parseInt(inputText, 10);
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
      setTipAmount(inputTextBill * (tipIntNum / 100));
      setTotalTip(tipAmount + inputTextBill);
    }
  }

  function checkForError() {
    return inputText === '0' ? 'can not be zero' : null;
  }
  function handleInputText(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForPeople = /^[0-9]+$/;
    if (event.target.value === '' || regexForPeople.test(event.target.value)) {
      setInputText(event.target.value);
    }
  }

  return (
    <div className="Tip-calculator">
      <div>
        <InputTextField
          label={'Bill'}
          icon={<img src={dollor} />}
          inputText={inputText}
          error={checkForError()}
          handleText={handleInputText}
        />
        <TipSelectionButton />
        <InputTextField
          label={'Number Of People'}
          icon={<img src={person} />}
          inputText={inputText}
          error={checkForError()}
          handleText={handleInputText}
        />
      </div>
      <DisplayTip />
    </div>
  );
};

export default TipCalculator;
