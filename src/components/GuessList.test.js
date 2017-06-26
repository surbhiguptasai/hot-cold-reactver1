import React from 'react';
import {shallow,mount} from 'enzyme';

import GuessList from './GuessList';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList array1={[]} />);
    });

    it('Renders a list of guesses', () => {
        const values = [10, 24, 52];
        const wrapper = mount(<GuessList array1={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });  
});