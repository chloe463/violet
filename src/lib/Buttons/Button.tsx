import * as React from 'react';

import './Button.css';

export interface IButtonProps {
  color?: string;
  disabled?: boolean;
  type?: string;
  onClick: (event) => void;
}

export default class Button extends React.Component<IButtonProps> {
  baseClassName = 'Button';
  constructor(props) {
    super(props);
  }

  getClassNames() {
    return [
      this.baseClassName,
      this.baseClassName + '--' + (this.props.disabled ? 'disabled' : this.props.color)
    ].join(' ');
  }

  render() {
    return (
      <button type={this.props.type || 'button'}
        className={this.getClassNames()}
        onClick={this.props.onClick}
        disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}
