import * as React from 'react';

import './Checkbox.css';

export interface ICheckboxProps {
  defaultChecked: boolean;
  name: string;
  label: string;
  value: any;
  onChange: (event) => void;
};

export default class Checkbox extends React.Component<ICheckboxProps> {
  constructor(props: ICheckboxProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <label className="Checkbox">
        <input type="checkbox"
          name={this.props.name}
          checked={this.props.defaultChecked}
          value={this.props.value}
          onChange={this.onChange}
        />
        <span className="Checkbox__ripple" />
        <span className={'Checkbox__square ' + (this.props.defaultChecked ? 'Checkbox__square--checked' : '')}>
          <svg className="Checkbox-checkmark"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className="Checkbox-checkmark-path"
              d="M 22 5 L 9.508 19 L 2 11.78" style={{ "fill": "none" }} />
          </svg>
        </span>
        <span className="Checkbox__label">{this.props.label}</span>
      </label>
    );
  }
}
