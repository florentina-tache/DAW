import React, { useReducer, useEffect } from 'react';
import { AmdDependency } from 'typescript';

import { validate } from '../../util/validators';
import './Input.css';

interface State {
  value?: string;
  isValid?: boolean;
  isTouched?: boolean;
}

const inputReducer = (state: State, action: any) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

interface Props {
  initialValue?: string;
  initialValid?: boolean;
  id?: string;
  onInput?: (...args: any) => void;
  validators: { type: string }[];
  element?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  label?: string;
  errorText?: string;
}

const Input = ({
  initialValue,
  initialValid,
  id,
  onInput = () => {},
  validators,
  element,
  type,
  placeholder,
  rows,
  label,
  errorText,
}: Props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isTouched: false,
    isValid: initialValid || false,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event: any) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const inputElement =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
