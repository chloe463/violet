import * as React from 'react';
import { ReactElement } from 'react';
import { cssClasses } from '../../internals';
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
    this.setState({ optionsVisibility: false });
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

    const optionsClass = cssClasses({
      'Options': true,
      'Options--visible': this.state.optionsVisibility
    });
    const labelClass = cssClasses({
      'Select__label': true,
      'Select__label--selected': selectedOption.props.label !== ''
    });

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
