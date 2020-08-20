import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import '../src/index.css';
import { InputText } from '../src/lib/Forms/InputText/InputText';
import './index.storybook.css';

export default {
  title: "Forms/InputText",
  decorators: [withKnobs],
}

export const withEmptyValueAndNoLabel = () => (
  <div className="container">
    <InputText value={''} label="" onChange={action('onChange!')} aria-label="no-label-text-field" />
  </div>
);

export const withEmptyValueAndLabel = () => (
  <div className="container">
    <InputText value={''} label={text('label', 'Input text here')} onChange={action('onChange!')} aria-label="with-label-text-field" />
  </div>
);

export const withValueAndNoLAbel = () => (
  <div className="container">
    <InputText value={'This is a test message'} label="" onChange={action('onChange!')}  aria-label="with-label-text-field"/>
  </div>
);

export const withValueAndLabel = () => (
  <div className="container">
    <InputText value={'This is a test message'} label="Label" onChange={action('onChange!')}  aria-label="with-label-text-field"/>
  </div>
);

export const disabled = () => (
  <div className="container">
    <InputText
      value={'This is a test message'}
      label="Label"
      onChange={action('onChange!')}
      disabled={boolean('InputText disabled', true)}
      aria-label="with-label-text-field"
    />
  </div>
);
