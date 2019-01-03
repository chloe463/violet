import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './Navbar.css';

interface IRouteDefinition {
  to: string;
  key: string;
  component: any;
  exact: boolean;
  name: string;
}

interface INavbarProps {
  brand: string;
  links: IRouteDefinition[];
  // TODO: Add search field on navbar
  // searchField: boolean;
  // onSearchAction: (e: Event) => void;
  children: React.ReactNode;
}

export default class Navbar extends React.Component<INavbarProps> {
  constructor(props: INavbarProps) {
    super(props);
  }
  public render() {
    const { links } = this.props;
    return (
      <BrowserRouter>
        <>
          <div className="Navbar">
            {/* Items on left */}
            <div className="Navbar__items--left">
              {/* Logo */}
              <Link className="Navbar__logo" to={'/'}>Violet</Link>
              {/* Link items */}
              {links.map(link =>
                <Link className="Navbar__item" key={link.key} to={link.to}>{link.name}</Link>
              )}
            </div>
            {/* TODO: Items on right */}
            {/* <div className="Navbar__items--right">
              <span className="Navbar__search-field-container">
                <input type="text" className="Navbar__search-field" />
              </span>
              <span className="Navbar__avatar-container">
                <span>avatar?</span>
              </span>
            </div> */}
          </div>
          <div className="Navbar__content">
            {this.props.children}
          </div>
        </>
      </BrowserRouter>
    );
  }
}
