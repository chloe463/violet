import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../src/index.css';

import InputText from '../src/lib/Forms/InputText/InputText';
import './checkbox.stories';


// class InputTextContainer extends React.Component<{}, {v: string}> {
//   public v: string;
//   constructor() {
//     super({});
//     this.onInputChange = this.onInputChange.bind(this);
//   }

//   onInputChange(value) {
//     action('onchange');
//     this.setState({ v: value });
//   }

//   render() {
//     return (
//       <div style={{margin: '24px'}}>
//         <InputText value={this.v} label="Demo" onChange={this.onInputChange}/>
//       </div>
//     );
//   }
// }

storiesOf('InputText', module)
  .add('With empty value and no label', () =>
    <InputText value={''} label="" onChange={action('onChange!')} />
  )
  .add('With empty value and label', () =>
    <InputText value={''} label="Input text here" onChange={action('onChange!')} />
  )
  .add('With value and no label', () =>
    <InputText value={'This is a test message'} label="" onChange={action('onChange!')} />
  )
  .add('With value and label', () =>
    <InputText value={'This is a test message'} label="Label" onChange={action('onChange!')} />
  );
