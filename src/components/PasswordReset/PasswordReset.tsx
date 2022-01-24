import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../context/auth-context';
import './PasswordReset.css';

const PasswordReset = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  let history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event: any) => {
    event.preventDefault();
    setSuccessMessage(true);
  };

  return (
    <Card className='authentication'>
      <h2>Password reset</h2>
      <hr />
      {!successMessage && (
        <form onSubmit={authSubmitHandler}>
          <Input
            element='input'
            id='email'
            type='email'
            label='E-Mail'
            validators={[VALIDATOR_EMAIL()]}
            errorText='Please enter a valid email address.'
            onInput={inputHandler}
          />
          <Button type='submit' disabled={!formState.isValid}>
            {'RESET'}
          </Button>
        </form>
      )}
      {successMessage && (
        <div className='success-message'>
          An email has been sent to reset your account password.
        </div>
      )}
      <Button
        inverse
        onClick={() => {
          history.push('/auth');
        }}
      >
        SWITCH TO LOGIN
      </Button>
    </Card>
  );
};

export default PasswordReset;
