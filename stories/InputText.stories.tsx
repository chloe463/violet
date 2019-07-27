import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '../src/index.css';
import './index.storybook.css';

import InputText from '../src/lib/Forms/InputText/InputText';

storiesOf('InputText', module)
  .addDecorator(withKnobs)
  .add('With empty value and no label', () =>
    <div className="container">
      <InputText value={''} label="" onChange={action('onChange!')} />
    </div>
  )
  .add('With empty value and label', () =>
    <div className="container">
      <InputText value={''} label={text('label', 'Input text here')} onChange={action('onChange!')} />
    </div>
  )
  .add('With value and no label', () =>
    <div className="container">
      <InputText value={'This is a test message'} label="" onChange={action('onChange!')} />
    </div>
  )
  .add('With value and label', () =>
    <div className="container">
      <InputText value={'This is a test message'} label="Label" onChange={action('onChange!')} />
    </div>
  )
  .add('Disabled', () =>
    <div className="container">
      <InputText value={'This is a test message'} label="Label" onChange={action('onChange!')}
        disabled={boolean('InputText disabled', true)}/>
    </div>
  );
