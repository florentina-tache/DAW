import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_EMAIL } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { LanguageContext } from '../../context/language-context';
import { AUTH, RESET_PASSWORD } from '../../shared/util/copy';
//import { useHttpClient } from '../../shared/hooks/http-hook';

import './PasswordReset.css';

const PasswordReset = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const { language } = useContext(LanguageContext);

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
    // try {
    //   const responseData = await sendRequest(
    //     'http://localhost:5000/api/users/password-reset',
    //     'POST',
    //     JSON.stringify({
    //       email: formState.inputs.email.value,
    //     }),
    //     {
    //       'Content-Type': 'application/json'
    //     }
    //   );
    // } catch (err) {}
    setSuccessMessage(true);
  };

  return (
    <Card className='authentication'>
      <h2>{AUTH.FORGOT_PASSWORD[language]}</h2>
      <hr />
      {!successMessage && (
        <form onSubmit={authSubmitHandler}>
          <Input
            element='input'
            id='email'
            type='email'
            label='E-Mail'
            validators={[VALIDATOR_EMAIL()]}
            errorText={AUTH.EMAIL_ERROR[language]}
            onInput={inputHandler}
          />
          <Button type='submit' disabled={!formState.isValid}>
            {RESET_PASSWORD.RESET[language]}
          </Button>
        </form>
      )}
      {successMessage && (
        <div className='success-message'>
          {RESET_PASSWORD.SUCCESS_MESSAGE[language]}
        </div>
      )}
      <Button
        inverse
        onClick={() => {
          history.push('/auth');
        }}
      >
        {AUTH.SWITCH_TO[language]}
        {AUTH.LOGIN[language]}
      </Button>
    </Card>
  );
};

export default PasswordReset;
