/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { InputTextField } from '../InputTextField/InputTextField';
import { SelectTipAmount } from '../TipSelection/TipSelection';
import DisplayTip from '../DisplayTipInput/DisplayTip';
import './TipCalculator.css';

import React, { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TipCalculator = () => {
  const [bill, setBill] = React.useState('');
  const [people, setPeople] = React.useState('');
  // const[isTipSelected, setIsTipSelected] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTip, setSelectedTip] = React.useState('');
  const [showError, setError] = React.useState(false);
  const [showBillAmtError, setShowBillAmtError] = React.useState(false);
  // const[calculatedTip, setCalculatedTip] = React.useState(0);

  // function calculateTip(){
  //     console.log(setCalculatedTip(bill * selectedTip / people));
  //     console.log(calculatedTip);
  // }

  function handleBillInput(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    const pattern = /^[0-9\b]+$/;
    console.log(input.match(pattern));
    if (pattern.test(input) && input !== '0') {
      setShowBillAmtError(false);
      setBill(input);
    } else {
      setShowBillAmtError(true);
    }
  }
  function handlePeopleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    const pattern = /^[0-9\b]+$/;
    console.log(input.match(pattern));
    if (pattern.test(input) && input !== '0') {
      setError(false);
      setPeople(input);
    } else {
      setError(true);
    }
  }

  function handleSelectedTip(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setSelectedTip(event.target.value);
  }

  // useEffect(()=>{
  //     console.log({bill})
  // })

  return (
    <div className="tip-calculator">
      <div>
        {/* <InputTextField
       inputText={inputText}
        /> */}
        <SelectTipAmount handleSelectedTip={handleSelectedTip} />
      </div>
      <div>
        <DisplayTip />
      </div>
    </div>
  );
};
export default TipCalculator;
