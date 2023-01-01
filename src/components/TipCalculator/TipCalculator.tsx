/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { InputTextField } from '../InputTextField/InputTextField';
import SelectTipAmount from '../SelectTipAmount/SelectTipAmount';
import { NumberOfPeople } from '../NumberOfPeople/NumberOfPeople';
import DisplayTipInput from '../DisplayTipInput/DisplayTipInput';
import './TipCalculator.css';
import React, { useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TipCalculator = () => {
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  const [tip, setTip] = React.useState('');

  //  const [isTipSelected, setIsTipSelected] = React.useState(false);

  const [tipAmount, setTipAmount] = React.useState(0);
  const [totalTip, setTotalTip] = React.useState(0);

  useEffect(() => {
    console.log({ bill, people, tip });
  }, [bill, people, tip]);

  // function calculateTipAmount() {
  //   if(Bill > 0 && People > 0 && Tip > 0){
  //    setTipAmount(Bill * (Tip /100));
  //    setTotalTip(tipAmount + Bill)
  //   }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleBillInput(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(e.target.value);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleSelectedTip(e: React.ChangeEvent<HTMLInputElement>) {
    setTip(e.target.value);
  }
  function handlePeople(e: React.ChangeEvent<HTMLInputElement>) {
    setPeople(e.target.value);
    // console.log(e.target.value)
  }

  return (
    <div className="Tip-calculator">
      <div>
        <InputTextField Bill={bill} handleBillInput={handleBillInput} />
        <SelectTipAmount Tip={tip} handleSelectedTip={handleSelectedTip} />
        <NumberOfPeople People={people} handlePeople={handlePeople} />
      </div>
      <DisplayTipInput tipAmount={tipAmount} totalTip={totalTip} />
    </div>
  );
};

export default TipCalculator;
