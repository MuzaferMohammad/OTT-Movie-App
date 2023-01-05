/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import TipSelection from '../TipSelection/TipSelection';
import '../TipSelection/TipSelection.css';
import './TipSelectionButton.css';

const TipSelectionButton = () => {
  const [customValue, setCustom] = React.useState('');
  const [tip, setTip] = React.useState('');

  function handleSelectedTip(value: string) {
    setTip(value);
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
            tip={tip}
            handleSelectedTip={() => handleSelectedTip('5')}
            label="5%"
          />
          <TipSelection
            tip={tip}
            handleSelectedTip={() => handleSelectedTip('10')}
            label="10%"
          />

          <TipSelection
            tip={tip}
            handleSelectedTip={() => handleSelectedTip('15')}
            label="15%"
          />
        </div>
        <div className="tip-row">
          <TipSelection
            tip={tip}
            handleSelectedTip={() => handleSelectedTip('25')}
            label="25%"
          />
          <TipSelection
            tip={tip}
            handleSelectedTip={() => handleSelectedTip('50')}
            label="50%"
          />
          <p>{tip}</p>
          <CustomButton
            customValue={customValue}
            handleCustomInput={handleCustomInput}
          />
          <p>{customValue}</p>
        </div>
      </div>
    </div>
  );
};
export default TipSelectionButton;
