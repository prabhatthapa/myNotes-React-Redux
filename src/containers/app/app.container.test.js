import React from 'react';
import { shallow } from 'enzyme';
import App from './app.container';

it('renders without crashing', () => {
  shallow(<App />);
});