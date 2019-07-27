import * as React from 'react';
import { Link } from 'react-router-dom';

import './Container.css';

interface IContainerProps {
  title: string;
}

export default class Container extends React.Component<IContainerProps> {
  public render() {
    return (
      <div className="Container">
        <div className="Container__header">
          <h2 className="Container__heading">
            {this.props.title}
          </h2>
        </div>
        <div className="Container__nav">
          <ul className="Container__nav-list">
            <li className="Container__nav-item">
              <Link to='/buttons'>buttons</Link>
            </li>
            <li className="Container__nav-item">
              <Link to='/forms'>forms</Link>
            </li>
            <li className="Container__nav-item">
              <Link to='/tabs'>tabs</Link>
            </li>
          </ul>
        </div>
        <div className="Container__content">
          {this.props.children}
        </div>
        <div className="Container__outline">
          <ul>
            <li>
              <Link to='/buttons'>buttons</Link>
            </li>
            <li>
              <Link to='/forms'>forms</Link>
            </li>
            <li>
              <Link to='/tabs'>tabs</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
