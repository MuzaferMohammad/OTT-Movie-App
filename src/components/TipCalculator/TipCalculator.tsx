/* eslint-disable react/react-in-jsx-scope */
// import { useState } from 'react';
import { InputTextField } from '../InputTextField/InputTextField';
import { SelectTipAmount } from '../SelectTipAmount/SelectTipAmount';
import { NumberOfPeople } from '../NumberOfPeople/NumberOfPeople';
import DisplayTipInput from '../DisplayTipInput/DisplayTipInput';
import './TipCalculator.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TipCalculator() {
  // const [count, setCount] = useState(0);
  return (
    <div className="Tip-calculator">
      <div>
        <InputTextField />
        <SelectTipAmount />
        <NumberOfPeople />
      </div>
      <DisplayTipInput />
    </div>
  );
}

export default TipCalculator;
