import * as React from 'react';
import { cssClasses } from '../../internals';
import './Option.css';

export interface IOptionProps {
  label: string;
  value: any;
  onClick?: (event) => void;
  selected?: boolean;
}

export default class Option extends React.Component<IOptionProps> {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    if (this.props.onClick) {
      this.props.onClick(this.props);
    }
  }

  render() {
    const className = cssClasses({
      'Option': true,
      'Option--selected': this.props.selected
    });
    return <li className={className} onClick={this.onClick}>{this.props.label}</li>;
  }
}
