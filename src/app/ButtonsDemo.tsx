import * as React from 'react';

import { Button, RaisedButton, SkeletonButton } from '../lib/Buttons';

export default class ButtonsDemo extends React.Component {
  public onButtonClick = (event: any) => {
    console.log(event);
  }

  public render() {
    return (
      <div>
        <div className="Form__element">
          <Button type="button" onClick={this.onButtonClick}>Basic</Button>
          <Button color="primary" type="button" onClick={this.onButtonClick}>Primary</Button>
          <Button color="accent" type="button" onClick={this.onButtonClick}>Accent</Button>
          <Button disabled={true} color="accent" type="button" onClick={this.onButtonClick}>Disabled</Button>
        </div>

        <div className="Form__element">
          <RaisedButton type="button" onClick={this.onButtonClick}>Raised</RaisedButton>
          <RaisedButton color="primary" type="button" onClick={this.onButtonClick}>Primary</RaisedButton>
          <RaisedButton color="accent" type="button" onClick={this.onButtonClick}>Accent</RaisedButton>
          <RaisedButton disabled={true} color="accent" type="button" onClick={this.onButtonClick}>Disabled</RaisedButton>
        </div>

        <div className="Form__element">
          <SkeletonButton type="button" onClick={this.onButtonClick}>Skeleton</SkeletonButton>
          <SkeletonButton color="primary" type="button" onClick={this.onButtonClick}>Primary</SkeletonButton>
          <SkeletonButton color="accent" type="button" onClick={this.onButtonClick}>Accent</SkeletonButton>
          <SkeletonButton disabled={true} color="accent" type="button" onClick={this.onButtonClick}>Disabled</SkeletonButton>
        </div>
      </div>
    );
  }
}
