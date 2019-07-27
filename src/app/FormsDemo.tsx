import * as React from 'react';

import AutoComplete from '../lib/Forms/AutoComplete/AutoComplete';
import Checkbox from '../lib/Forms/Checkbox/Checkbox';
import DatePicker from '../lib/Forms/DatePicker/DatePicker';
import InputText from '../lib/Forms/InputText/InputText';
import Radio from '../lib/Forms/Radio/Radio';
import Option from '../lib/Forms/Select/Option';
import Select from '../lib/Forms/Select/Select';

import Container from './Container';

interface IFormsDemoState {
  name: string;
  text: number | string;
  autocomplete: string;
  radio: number | string;
  checkbox: any;
  select: any;
  date: Date;
}

const suggestions = [
  { label: 'value1', value: 1 },
  { label: 'value2', value: 2 },
  { label: 'value3', value: 3 },
  { label: 'value4', value: 4 },
  { label: 'value5', value: 5 },
];


export default class FormsDemo extends React.Component<{}, IFormsDemoState> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkbox: { val1: false, val2: false, val3: false, val4: true, val5: false },
      name: '',
      radio: '',
      text: '',
      autocomplete: '',
      select: null,
      date: new Date(),
    };
  }

  public onInputTextChange = (event: any) => {
    this.setState({ text: event.target.value });
  }

  public onAutoCompleteChange = (event: any) => {
    console.log(event);
    this.setState({ autocomplete: event.label });
  }

  public onRadioChange = (event: any) => {
    this.setState({ radio: event.target.value });
  }

  public onCheckboxChange = (event: any) => {
    const checkboxState = Object.assign({}, this.state).checkbox;
    checkboxState[event.target.value] = !checkboxState[event.target.value];
    this.setState(checkboxState);
  }

  public onSelectChange = (event: any) => {
    console.log(event);
    this.setState({ select: event.value });
  }

  public onDatePickerChange = (event: any) => {
    console.log(event);
    this.setState({ date: event });
  }

  public onButtonClick = (event: any) => {
    console.log(event);
  }

  public render() {
    return (
      <Container title={'Forms'}>
        <div className="FormsDemo">
          <form className="Form">
            <div className="Form__element">
              <InputText
                label="text"
                value={this.state.text}
                onChange={this.onInputTextChange} />
            </div>
            <div className="Form__element">
              <AutoComplete
                value={this.state.autocomplete}
                label="AutoComplete"
                suggestions={suggestions}
                onChange={this.onAutoCompleteChange} />
            </div>
            <div className="Form__element">
              <Radio name="radio" value="val1" label="radio1" onChange={this.onRadioChange} defaultChecked={this.state.radio === 'val1'} />
              <Radio name="radio" value="val2" label="radio2" onChange={this.onRadioChange} defaultChecked={this.state.radio === 'val2'} />
              <Radio name="radio" value="val3" label="radio3" onChange={this.onRadioChange} defaultChecked={this.state.radio === 'val3'} />
            </div>
            <div className="Form__element">
              <Checkbox name="checkbox" value="val1"
                onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val1 === true}>Checkbox1</Checkbox>
              <Checkbox name="checkbox" value="val2"
                onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val2 === true}>Checkbox2</Checkbox>
              <Checkbox name="checkbox" value="val3"
                onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val3 === true}>Checkbox3</Checkbox>
              <Checkbox name="checkbox" value="val4"
                onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val4 === true}
                disabled={true}>Checkbox (Disabled)</Checkbox>
              <Checkbox name="checkbox" value="val5"
                onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val5 === true}
                indeterminate={true}>Checkbox (indeterminate)</Checkbox>
            </div>
            <div className="Form__element">
              <Select label="select" value={this.state.select} onChange={this.onSelectChange}>
                <Option label="option1" value="val1" />
                <Option label="option2" value="val2" />
                <Option label="option3" value="val3" />
                <Option label="option4" value="val4" />
              </Select>
            </div>
            <div className="Form__element">
              <DatePicker value={this.state.date} onChange={this.onDatePickerChange} />
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
