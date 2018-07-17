import * as React from 'react';
import './App.css';

import InputText from './lib/Forms/InputText/InputText';
import Radio from './lib/Forms/Radio/Radio';

interface IAppState {
  name: string;
  text: number | string;
  radio: number | string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Violet',
      radio: 'val1',
      text: '',
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.onRadioChange     = this.onRadioChange.bind(this);
  }

  public onInputTextChange(event: any) {
    this.setState({ text: event.target.value });
  }

  public onRadioChange(event: any) {
    this.setState({ radio: event.target.value });
  }

  public render() {
    return (
      <div className="App">
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
        </form>
      </div>
    );
  }
}

export default App;
