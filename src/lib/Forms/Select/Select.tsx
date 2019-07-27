import * as React from 'react';
import { ReactElement } from 'react';
import Option from './Option';
import './Select.css';

export interface ISelectProps {
  disabled?: boolean;
  label?: string;
  value: any;
  onChange: (event) => void;
}

export interface ISelectState {
  optionsVisibility: boolean;
};

export default class Select extends React.Component<ISelectProps, ISelectState> {
  constructor(props) {
    super(props);
    this.state = { optionsVisibility: false }

    this.openOptions   = this.openOptions.bind(this);
    this.hideOptions   = this.hideOptions.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onOptionClick(event) {
    this.props.onChange(event);
    setTimeout(() => {
      this.setState({ optionsVisibility: false });
    }, 500);
  }

  toggleVisibility() {
    if (this.props.disabled) {
      return;
    }
    this.setState({ optionsVisibility: !this.state.optionsVisibility });
  }

  openOptions(event) {
    if (this.props.disabled) {
      return;
    }
    this.setState({ optionsVisibility: true });
  }

  hideOptions(event) {
    this.setState({ optionsVisibility: false });
  }

  render() {
    const selectedList: any = React.Children.toArray(this.props.children)
      .filter((child: any) => child.props.value === this.props.value);
    const selectedOption: any = selectedList.length ? selectedList[0] : { props: { label: '' }};

    const optionsClass = 'Options ' +
      (this.state.optionsVisibility ? 'Options--visible' : '');
    const labelClass   = 'Select__label ' +
      (selectedOption.props.label !== '' ? 'Select__label--selected' : '');

    return (
      <div tabIndex={0}
        className={'Select ' + (this.props.disabled ? 'Select--disabled' : '')}
        onFocus={this.openOptions}
        onBlur={this.hideOptions}>
        <span className={labelClass}>{this.props.label}</span>
        <div className="Select__selected-value"
          onClick={this.openOptions}>{selectedOption.props.label}</div>
        <ul className={optionsClass}>
        {
          React.Children.map(this.props.children, (child: any) => {
            const newProps = Object.assign({}, child.props, {
              selected: child.props.value === selectedOption.props.value,
              onClick: (event) => this.onOptionClick(event)
            })
            return React.cloneElement(child as ReactElement<Option>, newProps);
          })
        }
        </ul>
      </div>
    );
  }
}
