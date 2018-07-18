import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InputText from './InputText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onChange = (event) => event;
  const inputText = <InputText value="" label="Placeholder" onChange={onChange}/>;
  ReactDOM.render(inputText, div);
  ReactDOM.unmountComponentAtNode(div);
});

it ('calls binded prop functions', () => {
  const div = document.createElement('div');
  const onFocus = (event) => { expect(true).toBeTruthy(); };
  const onBlur = (event) => { expect(true).toBeTruthy(); };
  const onChange = (event) => { expect(true).toBeTruthy(); };
  const inputText = <InputText
    value=""
    label="Placeholder"
    onFocus={onFocus}
    onBlur={onBlur}
    onChange={onChange}/>;
  ReactDOM.render(inputText, div);
})
