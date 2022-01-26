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
import { AUTH } from '../../shared/util/copy';

import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../context/auth-context';
import { LanguageContext } from '../../context/language-context';

import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  // const {sendRequest } = useHttpClient();

  let history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event: any) => {
    event.preventDefault();
    auth.login();
  };

  // const authSubmitHandler = async (event: any) => {
  //   event.preventDefault();

  //   if (isLoginMode) {
  //     try {
  //       const responseData = await sendRequest(
  //         'http://localhost:5000/api/users/login',
  //         'POST',
  //         JSON.stringify({
  //           email: formState.inputs.email.value,
  //           password: formState.inputs.password.value
  //         }),
  //         {
  //           'Content-Type': 'application/json'
  //         }
  //       );
  //       auth.login(responseData.user.id);
  //     } catch (err) {}
  //   } else {
  //     try {
  //       const responseData = await sendRequest(
  //         'http://localhost:5000/api/users/signup',
  //         'POST',
  //         JSON.stringify({
  //           name: formState.inputs.name.value,
  //           email: formState.inputs.email.value,
  //           password: formState.inputs.password.value
  //         }),
  //         {
  //           'Content-Type': 'application/json'
  //         }
  //       );

  //       auth.login(responseData.user.id);
  //     } catch (err) {}
  //   }
  // };

  return (
    <Card className='authentication'>
      <h2>{AUTH.AUTH_SUBTITLE[language]}</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element='input'
            id='name'
            type='text'
            label={AUTH.YOUR_NAME[language]}
            validators={[VALIDATOR_REQUIRE()]}
            errorText={AUTH.NAME_ERROR[language]}
            onInput={inputHandler}
          />
        )}
        <Input
          element='input'
          id='email'
          type='email'
          label='E-Mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText={AUTH.EMAIL_ERROR[language]}
          onInput={inputHandler}
        />
        <Input
          element='input'
          id='password'
          type='password'
          label={AUTH.PASSWORD[language]}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={AUTH.PASSWORD_ERROR[language]}
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>
          {isLoginMode ? AUTH.LOGIN[language] : AUTH.SIGNUP[language]}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {AUTH.SWITCH_TO[language]}
        {isLoginMode ? AUTH.SIGNUP[language] : AUTH.LOGIN[language]}
      </Button>
      {isLoginMode && (
        <div className='forgot-password'>
          <Button
            onClick={() => {
              history.push('/reset-password');
            }}
          >
            {AUTH.FORGOT_PASSWORD[language]}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Auth;
