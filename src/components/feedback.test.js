import React from 'react';
import { shallow } from 'enzyme';

import {Feedback} from './feedback';
import feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders some feedback', () => {
    let testFeedback = 'You are listening to a game!';

    let wrapper = shallow(<Feedback feedback={testFeedback} />);
    expect(wrapper.contains(testFeedback)).toEqual(true);
  })
});