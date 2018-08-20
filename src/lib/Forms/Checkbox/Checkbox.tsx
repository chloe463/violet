import * as React from 'react';

import './Checkbox.css';

export interface ICheckboxProps {
  disabled?: boolean;
  defaultChecked: boolean;
  indeterminate?: boolean;
  name: string;
  value: any;
  onChange: (event) => void;
};

export default class Checkbox extends React.Component<ICheckboxProps> {
  checkboxRef: React.RefObject<any>;
  constructor(props: ICheckboxProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.checkboxRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.checkboxRef);
    if (this.props.indeterminate) {
      this.checkboxRef.current.indeterminate = true;
    }
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <label className={'Checkbox ' + (this.props.disabled ? 'Checkbox--disabled' : '')}>
        <input type="checkbox"
          name={this.props.name}
          checked={this.props.defaultChecked}
          value={this.props.value}
          onChange={this.onChange}
          disabled={this.props.disabled}
          ref={this.checkboxRef}
        />
        <span className="Checkbox__ripple" />
        <span className={'Checkbox__square ' + (this.props.defaultChecked ? 'Checkbox__square--checked' : '')}>
          <svg className="Checkbox-checkmark"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className="Checkbox-checkmark-path"
              d="M 22.622 5.112 L 9.586 18.598 L 2.078 11.378" style={{"fill": "none"}} />
            <path className="Checkbox-indeterminate-path"
              d="M 2 12 L 8.853 12 L 22 12"/>
          </svg>
        </span>
        <span className="Checkbox__label">{this.props.children}</span>
      </label>
    );
  }
}
