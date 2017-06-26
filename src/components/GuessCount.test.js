import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './GuessCount';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', () => {
        const value = 5;
        const wrapper = shallow(<GuessCount count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
});