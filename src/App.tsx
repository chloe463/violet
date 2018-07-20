import * as React from 'react';
import './App.css';

import Checkbox from './lib/Forms/Checkbox/Checkbox';
import InputText from './lib/Forms/InputText/InputText';
import Radio from './lib/Forms/Radio/Radio';
import Option from './lib/Forms/Select/Option';
import Select from './lib/Forms/Select/Select';

interface IAppState {
  name: string;
  text: number | string;
  radio: number | string;
  checkbox: any;
  select: any;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkbox: { val1: false, val2: false, val3: false },
      name: '',
      radio: '',
      text: '',
      select: null
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onRadioChange     = this.onRadioChange.bind(this);
    this.onCheckboxChange  = this.onCheckboxChange.bind(this);
    this.onSelectChange    = this.onSelectChange.bind(this);
  }

  public onInputTextChange(event: any) {
    this.setState({ text: event.target.value });
  }

  public onRadioChange(event: any) {
    this.setState({ radio: event.target.value });
  }

  public onCheckboxChange(event: any) {
    const checkboxState = Object.assign({}, this.state).checkbox;
    checkboxState[event.target.value] = !checkboxState[event.target.value];
    this.setState(checkboxState);
  }

  public onSelectChange(event: any) {
    console.log(event);
    this.setState({ select: event.value });
  }

  public render() {
    return (
      <div className="App">
        <h2 style={{"textAlign": 'center'}}>Violet</h2>
        <form className="Form">
          <div className="Form__element">
            <InputText
              label="text"
              value={this.state.text}
              onChange={this.onInputTextChange}/>
          </div>
          <hr />
          <div className="Form__element">
            <Radio name="radio" value="val1" label="radio1" onChange={this.onRadioChange} defaultChecked={this.state.radio==='val1'}/>
            <Radio name="radio" value="val2" label="radio2" onChange={this.onRadioChange} defaultChecked={this.state.radio==='val2'}/>
            <Radio name="radio" value="val3" label="radio3" onChange={this.onRadioChange} defaultChecked={this.state.radio==='val3'}/>
          </div>
          <hr />
          <div className="Form__element">
            <Checkbox name="checkbox" value="val1" label="checkbox1" onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val1===true}/>
            <Checkbox name="checkbox" value="val2" label="checkbox2" onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val2===true}/>
            <Checkbox name="checkbox" value="val3" label="checkbox3" onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val3===true}/>
          </div>
          <hr />
          <div className="Form__element">
            <Select label="select" value={this.state.select} onChange={this.onSelectChange}>
              <Option label="option1" value="val1" />
              <Option label="option2" value="val2" />
              <Option label="option3" value="val3" />
              <Option label="option4" value="val4" />
            </Select>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
