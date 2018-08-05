import * as React from 'react';

import './Ripple.css';

interface IRippleProps {
  top: number;
  left: number;
  radius: number;
}

export default class Ripple extends React.Component<IRippleProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      top:    this.props.top + 'px',
      left:   this.props.left + 'px',
      width:  this.props.radius + 'px',
      height: this.props.radius + 'px'
    };
    return (
      <div className="Ripple" style={style}/>
    );
  }
}
