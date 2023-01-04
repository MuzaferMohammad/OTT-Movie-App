/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import TipSelection from '../TipSelection/TipSelection';
import '../TipSelection/TipSelection.css';
import './TipSelectionButton.css';

const TipSelectionButton = () => {
  const [customValue, setCustom] = React.useState('');
  function handleSelectedTip(tip: number) {
    return console.log(tip);
  }

  function handleCustomInput(e: React.ChangeEvent<HTMLInputElement>) {
    const regexForCustom = /^[0-9]+$/;
    if (e.target.value === '' || regexForCustom.test(e.target.value)) {
      setCustom(e.target.value);
    }
  }

  // function handleCustomInput(custom: any): void {
  //   throw new Error('Function not implemented.');
  // }

  return (
    <div>
      <div className="tip-selection">
        <p className="select-tip">Select Tip%</p>
        <div className="tip-row">
          <TipSelection
            tip="5"
            handleSelectedTip={() => handleSelectedTip(5)}
            label="5%"
          />
          <TipSelection
            tip="10"
            handleSelectedTip={() => handleSelectedTip(10)}
            label="10%"
          />

          <TipSelection
            tip="15"
            handleSelectedTip={() => handleSelectedTip(15)}
            label="15%"
          />
        </div>
        <div className="tip-row">
          <TipSelection
            tip="25"
            handleSelectedTip={() => handleSelectedTip(25)}
            label="25%"
          />
          <TipSelection
            tip="50"
            handleSelectedTip={() => handleSelectedTip(50)}
            label="50%"
          />
          <CustomButton
            customValue={customValue}
            handleCustomInput={handleCustomInput}
          />
        </div>
      </div>
    </div>
  );
};
export default TipSelectionButton;
