import * as React from 'react';
import { cssClasses } from '../../internals';

import './Checkbox.css';

export interface ICheckboxProps {
  defaultChecked: boolean;
  name: string;
  label: string;
  value: any;
  onChange: (event) => void;
};
export interface ICheckboxState {
  squareClasses: {[className: string]: boolean};
};

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  constructor(props: ICheckboxProps) {
    super(props);
    this.state = {
      squareClasses: {
        'Checkbox__square': true,
        'Checkbox__square--checked': props.defaultChecked
      }
    }
    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props === nextProps) {
      return true;
    }
    this.handleCssClasses(nextProps);
    return true;
  }

  handleCssClasses(nextProps) {
    if (nextProps.defaultChecked) {
      this.setState({
        squareClasses: {
          'Checkbox__square': true,
          'Checkbox__square--checked': true
        },
      });
    } else {
      this.setState({
        squareClasses: {
          'Checkbox__square': true,
          'Checkbox__square--checked': false
        },
      });
    }
  }

  onClick(event) {
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
          onChange={this.onClick}
        />
        <span className="Checkbox__ripple" />
        <span className={cssClasses(this.state.squareClasses)}>
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
