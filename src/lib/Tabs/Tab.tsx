import * as React from 'react';

export interface ITabProps {
  title: string;
  position?: 'right' | 'left' | 'center';
  diff?: number;
}

export default class Tab extends React.Component<ITabProps> {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    const style = {transform: 'translate3d(' + (this.props.diff !== undefined ? this.props.diff : 1) * 100 + '%,0,0)'};
    return (
      <div className={'Tab ' + ('Tab--' + this.props.position)} style={style}>
        {this.props.children}
      </div>
    );
  }
}
