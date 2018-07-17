import * as React from 'react';
import './App.css';

import InputText from './lib/Forms/InputText/InputText';

interface IAppState {
  name: string;
  text: number | string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Violet',
      text: ''
    };
    this.onInputTextChange = this.onInputTextChange.bind(this);
  }

  public onInputTextChange(event: any) {
    this.setState({ text: event.target.value });
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
        </form>
      </div>
    );
  }
}

export default App;
