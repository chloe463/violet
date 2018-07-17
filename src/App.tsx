import * as React from 'react';
import './App.css';

interface IAppState {
  name: string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = { name: 'Violet' };
  }

  public render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
