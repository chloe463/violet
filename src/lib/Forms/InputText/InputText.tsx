import * as React from 'react';

import './InputText.css';

export interface IInputTextProps {
  label?: string;
  value: any;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
  onChange: (event: any) => void;
}
export interface IInputTextState {
  labelClass: string;
}

export default class InputText extends React.Component<IInputTextProps, IInputTextState> {
  constructor(props: IInputTextProps) {
    super(props);
    this.state = {
      labelClass: props.value.length ? 'InputText__label' : 'InputText__placeholder',
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur  = this.onBlur.bind(this);
  }

  shouldComponentUpdate(nextProps: IInputTextProps, nextState: IInputTextState) {
    if (nextProps.value.length === 0 && nextState.labelClass === 'InputText__label') {
      this.setState({
        labelClass: 'InputText__placeholder'
      });
    }
    return true;
  }

  onFocus(event): void {
    if (this.props.onFocus !== undefined) {
      this.props.onFocus(event);
    }
  }

  onBlur(event): void {
    this.setState({
      labelClass: this.props.value.length ? 'InputText__label' : 'InputText__placeholder'
    })
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
          onInput={this.props.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <span className={this.state.labelClass}>{this.props.label}</span>
        <div className="InputText__underline" />
        <div className="InputText__underline--focus" />
      </div>
    );
  }
}
