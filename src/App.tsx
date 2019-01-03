import * as React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import { Navbar } from './lib/Navbar';

import ButtonsDemo from './app/ButtonsDemo';
import FormsDemo from './app/FormsDemo';
import TabsDemo from './app/TabsDemo';

const routes = [
  {
    component: FormsDemo,
    to: '/forms',
    exact: true,
    key: 'forms#index',
    name: 'Forms'
  },
  {
    component: ButtonsDemo,
    to: '/buttons',
    exact: true,
    key: 'buttons#index',
    name: 'Button'
  },
  {
    component: TabsDemo,
    to: '/tabs',
    exact: true,
    key: 'tabs#index',
    name: 'Tabs'
  },
];

class App extends React.Component {
  public render() {
    return (
      <div>
        <Navbar brand={'Violet'} links={routes}>
          <Switch>
            {routes.map(route => <Route key={route.key} path={route.to} component={route.component} />)}
          </Switch>
        </Navbar>
      </div>
    );
  }
}

export default App;
