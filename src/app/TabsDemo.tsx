import * as React from 'react';
import { Tab, Tabs } from '../lib/Tabs';

import Container from './Container';

interface ITabsDemoState {
  selectedTabIndex: number;
}

export default class TabsDemo extends React.Component<{}, ITabsDemoState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      selectedTabIndex: 0
    };
  }

  public onTabTitleClick = (tabIndex: any) => {
    this.setState({ selectedTabIndex: tabIndex });
  }

  public render() {
    return (
      <Container title={'Tabs'}>
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
      </Container>
    );
  }
}
