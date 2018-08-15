import * as React from 'react';
import InputText from '../InputText/InputText';

import './AutoComplete.css';

export interface IAutoCompleteProps {
  label: string;
  suggestions: any[];
  value: any;
  onChange: (event) => void;
}

export interface IAutoCompleteState {
  filterString: string;
  optionsVisibility: boolean;
}

export default class AutoComplete extends React.Component<IAutoCompleteProps, IAutoCompleteState> {
  constructor(props) {
    super(props);
    this.state = {
      filterString: '',
      optionsVisibility: false
    };
    this.onFocus           = this.onFocus.bind(this);
    this.onBlur            = this.onBlur.bind(this);
    this.onInputTextChange = this.onInputTextChange.bind(this);
  }

  onFocus() {
    this.setState({ optionsVisibility: true });
  }

  onBlur() {
    this.setState({ optionsVisibility: false });
  }

  onInputTextChange(event) {
    this.setState({ filterString: event.target.value });
  }

  onOptionClick(event) {
    this.setState({
      filterString: event.label,
      optionsVisibility: false
    });
    this.props.onChange(event);
  }

  get value() {
    return this.state.optionsVisibility ? this.state.filterString : this.props.value;
  }

  render() {
    const suggestionsClass = 'AutoComplete__suggestions ' +
      (this.state.optionsVisibility ? 'AutoComplete__suggestions--visible' : '');
    return (
      <div tabIndex={0} className="AutoComplete"
        onFocus={this.onFocus} onBlur={this.onBlur}>
        <InputText
          label={this.props.label}
          value={this.value}
          onChange={this.onInputTextChange} />
        <ul className={suggestionsClass}>
          {this.props.suggestions.filter(
            suggestion => suggestion.label.includes(this.state.filterString)
          ).map(
            suggestion => (
              <li key={suggestion.value}
                className="AutoComplete__option"
                onClick={this.onOptionClick.bind(this, suggestion)}>
                {suggestion.label}
              </li>
            )
          )}
        </ul>
    </div>
    );
  }
}
