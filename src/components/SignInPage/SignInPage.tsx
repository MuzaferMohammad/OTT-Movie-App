import React from 'react';
import { Button } from '../Button/Button';
import { InputTextField } from '../InputTextField/InputTextField';
import './SignInPage.css';

interface SignInPageInterface {
  label?: string;
  email?: string;
  password?: string;
  handleEmailInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SignInPage = ({ label, placeholder }: SignInPageInterface) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForEmail = /^[a-z]/;
    if (event.target.value === '' || regexForEmail.test(event.target.value)) {
      setEmail(event.target.value);
    }
  }

  function handlePasswordInput(event: React.ChangeEvent<HTMLInputElement>) {
    const regexForPassword = /^[0-9]+$/;
    if (
      event.target.value === '' ||
      regexForPassword.test(event.target.value)
    ) {
      setPassword(event.target.value);
    }
  }

  return (
    <div className="container">
      <div className="sign_in-container">
        <div className="inner-sign_in-container">
          <p>
            <span>Sign</span> In
          </p>
          <InputTextField
            className="input-field"
            label="Email"
            placeholder="Email"
            inputText={email}
            handleText={handleEmailInput}
          />
          <InputTextField
            className="input-field"
            label="Password"
            placeholder="Password"
            inputText={password}
            handleText={handlePasswordInput}
          />
          <div className="signin-button-container">
            <Button
              className="button"
              label={'Sign In'}
              backgroundColor={'#BB261A'}
              color={'#FFFFFF'}
            />
          </div>
        </div>
        <div className="signup-container">
          <p className="welcome-note">
            <span>Welcome to</span> Movie OTT
          </p>
          {/* <img src="./Play-icon.svg" alt="Play" /> */}
          <p className="create-account-note">
            <span>New here?</span> Create an account here.
          </p>
          <div className="signup-button-container">
            <Button
              className="button"
              label={'Sign Up'}
              backgroundColor={'#AFB2B9'}
              color={'#1D253A'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
