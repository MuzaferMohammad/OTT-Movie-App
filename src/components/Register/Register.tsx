import React from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import './Register.css';

interface SignInPageInterface {
  label?: string;
  handleEmailInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const RegisterPage = ({ label, placeholder }: SignInPageInterface) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  function handleFullNameInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForFullName = /^[A-Za-z\s]*$/;
    if (
      event.target.value === '' ||
      regexForFullName.test(event.target.value)
    ) {
      setFullName(event.target.value);
    }
  }

  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForEmail = /^[A-Za-z\s]*$/;
    if (event.target.value === '' || regexForEmail.test(event.target.value)) {
      setEmail(event.target.value);
    }
  }

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForPassword = /^[A-Za-z\s]*$/;
    if (
      event.target.value === '' ||
      regexForPassword.test(event.target.value)
    ) {
      setPassword(event.target.value);
    }
  }

  function handleConfirmPasswordInput(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const regexForPassword = /^[A-Za-z\s]*$/;
    if (
      event.target.value === '' ||
      regexForPassword.test(event.target.value)
    ) {
      setConfirmPassword(event.target.value);
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <p>Register</p>
        <div className="input-field-container">
          <InputTextField
            className="input-field"
            label="Full Name"
            placeholder="Full Name"
            inputText={fullName}
            handleText={handleFullNameInput}
            backgroundColor={'#181728'}
          />
        </div>
        <div className="input-field-container">
          <InputTextField
            className="input-field"
            label="Email"
            placeholder="Email"
            inputText={email}
            handleText={handleEmailInput}
            backgroundColor={'#181728'}
          />{' '}
        </div>
        <div className="input-field-container">
          <InputTextField
            className="input-field"
            label="Password"
            placeholder="Password"
            inputText={password}
            handleText={handlePasswordInput}
            backgroundColor={'#181728'}
          />{' '}
        </div>
        <div className="input-field-container">
          <InputTextField
            className="input-field"
            label="Confirm Password"
            placeholder="Confirm Password"
            inputText={confirmPassword}
            handleText={handleConfirmPasswordInput}
            backgroundColor={'#181728'}
          />{' '}
        </div>
        <div className="register-button-container">
          <Button
            className="button"
            label={'Register'}
            backgroundColor={'#BB261A'}
            color={'#FFFFFF'}
          />
        </div>
      </div>
    </div>
  );
};
