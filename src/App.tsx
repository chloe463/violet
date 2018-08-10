import * as React from 'react';
import './App.css';

import { Button, RaisedButton, SkeletonButton } from './lib/Buttons';
import AutoComplete from './lib/Forms/AutoComplete/AutoComplete';
import Checkbox from './lib/Forms/Checkbox/Checkbox';
import DatePicker from './lib/Forms/DatePicker/DatePicker';
import InputText from './lib/Forms/InputText/InputText';
import Radio from './lib/Forms/Radio/Radio';
import Option from './lib/Forms/Select/Option';
import Select from './lib/Forms/Select/Select';
import { Tab, Tabs } from './lib/Tabs';

interface IAppState {
  name: string;
  text: number | string;
  autocomplete: string;
  radio: number | string;
  checkbox: any;
  select: any;
  date: Date;

  selectedTabIndex: number;
}

const suggestions = [
  { label: 'value1', value: 1 },
  { label: 'value2', value: 2 },
  { label: 'value3', value: 3 },
  { label: 'value4', value: 4 },
  { label: 'value5', value: 5 },
];

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      checkbox: { val1: false, val2: false, val3: false },
      name: '',
      radio: '',
      text: '',
      autocomplete: '',
      select: null,
      date: new Date(),

      selectedTabIndex: 0
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onAutoCompleteChange = this.onAutoCompleteChange .bind(this);
    this.onRadioChange     = this.onRadioChange.bind(this);
    this.onCheckboxChange  = this.onCheckboxChange.bind(this);
    this.onSelectChange    = this.onSelectChange.bind(this);
    this.onDatePickerChange = this.onDatePickerChange.bind(this);
    this.onButtonClick      = this.onButtonClick.bind(this);
    this.onTabTitleClick    = this.onTabTitleClick.bind(this);
  }

  public onInputTextChange(event: any) {
    this.setState({ text: event.target.value });
  }

  public onAutoCompleteChange(event: any) {
    console.log(event);
    this.setState({ autocomplete: event.label });
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

  public onDatePickerChange(event: any) {
    console.log(event);
    this.setState({ date: event });
  }

  public onButtonClick(event: any) {
    console.log(event);
  }

  public onTabTitleClick(tabIndex: any) {
    this.setState({ selectedTabIndex: tabIndex });
  }

  public render() {
    return (
      <div className="App">
        <h2 style={{"textAlign": 'center'}}>Violet</h2>
        <Tabs selectedIndex={this.state.selectedTabIndex} onTabTitleClick={this.onTabTitleClick}>
          <Tab title={'Tab1'}>
            <p>
              Content1
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate quis commodi, ratione accusantium ipsam consectetur sit aliquid corporis at? Ipsa neque praesentium aut perferendis porro error placeat mollitia quam.
            </p>
          </Tab>
          <Tab title={'Tab2'}>
            <p>
              Content2
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum dolorem natus eveniet necessitatibus, dignissimos corporis doloremque nihil qui nam beatae laboriosam! Quod magni cumque odit aspernatur sapiente qui dolorem!
            </p>
          </Tab>
          <Tab title={'Tab3'}>
            <p>
              Content3
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero ut at unde blanditiis reprehenderit dicta, quod commodi iusto, pariatur officiis nesciunt! Quae sunt magni nostrum nemo laborum quis rem.
            </p>
          </Tab>
        </Tabs>
        <form className="Form">
          <div className="Form__element">
            <InputText
              label="text"
              value={this.state.text}
              onChange={this.onInputTextChange}/>
          </div>
          <div className="Form__element">
            <AutoComplete
              value={this.state.autocomplete}
              label="AutoComplete"
              suggestions={suggestions}
              onChange={this.onAutoCompleteChange}/>
          </div>
          <div className="Form__element">
            <Radio name="radio" value="val1" label="radio1" onChange={this.onRadioChange} defaultChecked={this.state.radio==='val1'}/>
            <Radio name="radio" value="val2" label="radio2" onChange={this.onRadioChange} defaultChecked={this.state.radio==='val2'}/>
            <Radio name="radio" value="val3" label="radio3" onChange={this.onRadioChange} defaultChecked={this.state.radio==='val3'}/>
          </div>
          <div className="Form__element">
            <Checkbox name="checkbox" value="val1" label="checkbox1" onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val1===true}/>
            <Checkbox name="checkbox" value="val2" label="checkbox2" onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val2===true}/>
            <Checkbox name="checkbox" value="val3" label="checkbox3" onChange={this.onCheckboxChange} defaultChecked={this.state.checkbox.val3===true}/>
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
            <DatePicker value={this.state.date} onChange={this.onDatePickerChange}/>
          </div>
          <div className="Form__element">
            <Button type="button" onClick={this.onButtonClick}>Basic</Button>
            <Button color="primary" type="button" onClick={this.onButtonClick}>Primary</Button>
            <Button color="accent" type="button" onClick={this.onButtonClick}>Accent</Button>
            <Button disabled={true} color="accent" type="button" onClick={this.onButtonClick}>Disabled</Button>
          </div>

          <div className="Form__element">
            <RaisedButton type="button" onClick={this.onButtonClick}>Raised</RaisedButton>
            <RaisedButton color="primary" type="button" onClick={this.onButtonClick}>Primary</RaisedButton>
            <RaisedButton color="accent" type="button" onClick={this.onButtonClick}>Accent</RaisedButton>
            <RaisedButton disabled={true} color="accent" type="button" onClick={this.onButtonClick}>Disabled</RaisedButton>
          </div>

          <div className="Form__element">
            <SkeletonButton type="button" onClick={this.onButtonClick}>Skeleton</SkeletonButton>
            <SkeletonButton color="primary" type="button" onClick={this.onButtonClick}>Primary</SkeletonButton>
            <SkeletonButton color="accent" type="button" onClick={this.onButtonClick}>Accent</SkeletonButton>
            <SkeletonButton disabled={true} color="accent" type="button" onClick={this.onButtonClick}>Disabled</SkeletonButton>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
