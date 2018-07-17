import * as React from 'react';
import './Radio.css';

export interface IRadioProps {
  name: string;
  label: string;
  value: any;
  defaultChecked: boolean;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  onChange: (event) => void;
}

export default class Radio extends React.Component<IRadioProps> {

  render() {
    return (
      <label className="Radio">
        <span className="Radio__circleContainer">
          <input
            type="radio"
            className="Radio__inputRadio"
            name={this.props.name}
            value={this.props.value}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            onChange={this.props.onChange}
            checked={this.props.defaultChecked}
          />
          <span className="Radio__outerCircle" />
          <span className="Radio__innerCircle" />
          <span className="Radio__ripple" />
        </span>
        <span className="Radio__label">{this.props.label}</span>
      </label>
    );
  }
}
