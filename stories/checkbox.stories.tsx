import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import '../src/index.css';

import Checkbox from '../src/lib/Forms/Checkbox/Checkbox';

storiesOf('Checkbox', module)
  .add('With empty value and no label', () =>
    <Checkbox name="test" value={true} label="Checkbox" onChange={action('onChange!')} defaultChecked/>
  )
