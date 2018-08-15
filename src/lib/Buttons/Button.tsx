import * as React from 'react';
import Ripple from '../Ripple/Ripple'

import './Button.css';

export interface IButtonProps {
  color?: string;
  disabled?: boolean;
  type?: string;
  onClick: (event) => void;
}
export interface IButtonState {
  ripples: any[];
}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  baseClassName = 'Button';
  constructor(props) {
    super(props);
    this.state =  { ripples: [] };
    this.onClick = this.onClick.bind(this);
  }

  getClassNames() {
    return [
      this.baseClassName,
      this.baseClassName + '--' + (this.props.disabled ? 'disabled' : this.props.color)
    ].join(' ');
  }

  onClick(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <button type={this.props.type || 'button'}
        className={this.getClassNames()}
        onClick={this.onClick}
        // onMouseDown={this.enableRippleEffect}
        disabled={this.props.disabled}>
        {this.props.children}
        {!this.props.disabled && <Ripple />}
      </button>
    );
  }
}
