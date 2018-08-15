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

interface ITabsState {
  indicatorStyle: { left: number, width: number };
}

export default class Tabs extends React.Component<ITabsProps, ITabsState> {
  titleRefs: Array<React.RefObject<any>>;
  constructor(props) {
    super(props);
    this.titleRefs = this.props.children.map(() => React.createRef());
    this.state = {
      indicatorStyle: { left: 0, width: 0 }
    };
  }

  updateIndicator() {
    const currentTitleRef = this.titleRefs[this.props.selectedIndex].current;
    const left  = currentTitleRef.offsetLeft;
    const width = currentTitleRef.clientWidth;

    const { indicatorStyle } = this.state;
    if (indicatorStyle.left === left && indicatorStyle.width === width) {
      return;
    }

    this.setState({
      indicatorStyle: { left, width }
    });
  }

  componentDidUpdate() {
    this.updateIndicator();
  }
  componentDidMount() {
    this.updateIndicator();
  }

  onTabTitleClick(tabIndex: number) {
    this.props.onTabTitleClick(tabIndex);
  }

  render() {
    return (
      <div className="Tabs">
        <div className="Tabs__header">
          <ul className="Tabs__titles">
            {this.props.children.map((child: Tab, index: number) => {
              const cssClasses = 'Tabs__title ' + (this.props.selectedIndex === index ? 'Tabs__title--active' : '');
              return (
                <li className={cssClasses}
                  key={index}
                  ref={this.titleRefs[index]}
                  onClick={this.onTabTitleClick.bind(this, index)}>
                  <Ripple color="var(--brand-hover--light)"/>
                  {child.props.title}
                </li>
              );
            })}
            <span className="Tabs__indicator" style={this.state.indicatorStyle} />
          </ul>
        </div>
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
