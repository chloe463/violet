import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import '../src/index.css';
import './index.storybook.css';

import Checkbox from '../src/lib/Forms/Checkbox/Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('With empty value and no label', () =>
    <div className="container">
      <Checkbox name="test" value={true} onChange={action('onChange!')} defaultChecked />
    </div>
  )
  .add('With empty value and label', () =>
    <div className="container">
      <Checkbox name="test" value={true} onChange={action('onChange!')} defaultChecked>
        Checkbox
      </Checkbox>
    </div>
  )
  .add('With indeterminate', () =>
    <div className="container">
      <Checkbox name="test"
      value={true}
      onChange={action('onChange!')}
      defaultChecked={true}
      indeterminate={boolean('indeterminate', true)}>
        Indeterminate
      </Checkbox>
    </div>
  )
