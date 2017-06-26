import React from 'react';
import Heading from './Heading';
import {shallow} from 'enzyme';
describe('<Heading />', () => {
    it('Renders without crashing', () => {
        shallow(<Heading />);
    });

   
});