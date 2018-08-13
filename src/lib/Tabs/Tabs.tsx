import * as React from 'react';
import Ripple from '../Ripple/Ripple';
import Tab from './Tab';
// import { ITabProps } from './Tab';

import './Tabs.css';

interface ITabsProps {
  children: React.ReactNodeArray;
  selectedIndex: number;
  onTabTitleClick: (index: number) => void;
}

export default class Tabs extends React.Component<ITabsProps> {
  constructor(props) {
    super(props);
  }

  onTabTitleClick(tabIndex: number) {
    this.props.onTabTitleClick(tabIndex);
  }

  render() {
    return (
      <div className="Tabs">
        <ul className="Tabs__titles">
          {this.props.children.map((child: Tab, index: number) => {
            const cssClasses = 'Tabs__title ' + (this.props.selectedIndex === index ? 'Tabs__title--active' : '');
            return (
              <li className={cssClasses} key={index} onClick={this.onTabTitleClick.bind(this, index)}>
                <Ripple color="var(--brand-hover--light)"/>
                {child.props.title}
              </li>
            );
          })}
        </ul>
        <div className="Tabs__content">
          {this.props.children.map((child: React.ReactElement<Tab>, index: number) => {
            const tabPosition = (this.props.selectedIndex === index) ? 'center' :
              (this.props.selectedIndex > index) ? 'left' : 'right';
            const diff = index - this.props.selectedIndex;

            return React.cloneElement(child, Object.assign({}, child.props, {
              key: index,
              position: tabPosition,
              diff
            }));
          })}
        </div>
      </div>
    );
  }
}
