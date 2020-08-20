import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import * as React from 'react';
import { useRef } from "react";
import './InputText.css';

export interface IInputTextProps {
  label: string;
}

export type InputTextProps = IInputTextProps & AriaTextFieldOptions;

export const InputText: React.FC<InputTextProps> = (props) => {
  const { label, children, ...rest } = props;
  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const { inputProps, labelProps } = useTextField(rest as AriaTextFieldOptions, textFieldRef);

  return (
    <div className="InputText">
      <input type="text"
        className="InputText__form"
        disabled={props.isDisabled}
        ref={textFieldRef}
        {...inputProps}
        placeholder="&nbsp;"
      />
      <span className="InputText__placeholder" {...labelProps}>{props.label}</span>
      <div className="InputText__underline" />
      <div className="InputText__underline--focus" />
    </div>
  );
}
