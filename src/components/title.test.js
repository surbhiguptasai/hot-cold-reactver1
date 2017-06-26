import React from 'react';
import title from './title';
import {shallow} from 'enzyme';
describe('<title />', () => {
    it('Renders without crashing', () => {
        shallow(<title />);
    });

   
});