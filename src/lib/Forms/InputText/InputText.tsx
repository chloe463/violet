import * as React from 'react';

import './InputText.css';

export interface IInputTextProps {
  label?: string;
  value: any;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onChange: (event: any) => void;
  disabled?: boolean;
}

export default class InputText extends React.Component<IInputTextProps> {
  constructor(props: IInputTextProps) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur  = this.onBlur.bind(this);
  }

  onFocus(event): void {
    if (this.props.onFocus !== undefined) {
      this.props.onFocus(event);
    }
  }

  onBlur(event): void {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  render() {
    return (
      <div className="InputText">
        <input type="text"
          className="InputText__form"
          value={this.props.value}
          onChange={this.props.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder="&nbsp;"
          disabled={this.props.disabled}
        />
        <span className="InputText__placeholder">{this.props.label}</span>
        <div className="InputText__underline" />
        <div className="InputText__underline--focus" />
      </div>
    );
  }
}
