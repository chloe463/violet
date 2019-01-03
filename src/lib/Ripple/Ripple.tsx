import * as React from 'react';
import { calculateRipplePosition, timer } from '../internals';

import './Ripple.css';

interface IRippleProps {
  color?: string;
}
interface IRippleState {
  ripples: any[];
}

export default class Ripple extends React.Component<IRippleProps, IRippleState> {
  private mounted: boolean = false;
  constructor(props) {
    super(props);
    this.state = { ripples: [] };
    this.enableRippleEffect = this.enableRippleEffect.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    this.setState(() => {
      return { ripples: [] };
    });
  }

  enableRippleEffect(event) {
    const key = (new Date()).getMilliseconds() + Math.random();
    const { top, left, radius } = calculateRipplePosition(event);

    // Add ripple component
    this.setState((prevState: IRippleState) => {
      return {
        ripples: [
          ...prevState.ripples,
          { key, top, left, radius }
        ]
      };
    });

    // Remove ripple component after 800ms.
    timer(1300).then(() => {
      if (!this.mounted) {
        return;
      }
      this.setState((prevState: IRippleState) => {
        return { ripples: prevState.ripples.filter(ripple => ripple.key !== key) };
      });
    });
  }

  render() {
    return (
      <div className="Ripple" onMouseDown={this.enableRippleEffect}>
        <div style={{position:'relative'}}>
          {this.state.ripples.map(ripple => {
            const style = {
              position: 'absolute',
              top: ripple.top + 'px',
              left: ripple.left + 'px',
              width: ripple.radius + 'px',
              height: ripple.radius + 'px',
              backgroundColor: this.props.color
            } as React.CSSProperties;
            return <div key={ripple.key} style={style} className="Ripple__effect"/>
          })}
        </div>
      </div>
    );
  }
}
