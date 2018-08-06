import * as React from 'react';
import { calculateRipplePosition, timer } from '../internals';
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
    this.enableRippleEffect = this.enableRippleEffect.bind(this);
  }

  getClassNames() {
    return [
      this.baseClassName,
      this.baseClassName + '--' + (this.props.disabled ? 'disabled' : this.props.color)
    ].join(' ');
  }

  enableRippleEffect(event) {
    const key = (new Date()).getMilliseconds() + Math.random();
    const { top, left, radius } = calculateRipplePosition(event);

    // Add ripple component
    this.setState((prevState: IButtonState) => {
      return {
        ripples: [
          ...prevState.ripples,
          { key, top, left, radius }
        ]
      };
    });

    // Remove ripple component after 800ms.
    timer(1300).then(() => {
      this.setState((prevState: IButtonState) => {
        return { ripples: prevState.ripples.filter(ripple => ripple.key !== key) };
      });
    });
  }

  onClick(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <button type={this.props.type || 'button'}
        className={this.getClassNames()}
        onClick={this.onClick}
        onMouseDown={this.enableRippleEffect}
        disabled={this.props.disabled}>
        {this.props.children}
        {this.state.ripples.map(ripple => {
          return <Ripple key={ripple.key} top={ripple.top} left={ripple.left} radius={ripple.radius}/>;
        })}
      </button>
    );
  }
}
