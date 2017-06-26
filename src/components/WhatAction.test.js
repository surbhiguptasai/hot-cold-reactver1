import React from 'react';
import WhatAction from './WhatAction';
import {shallow} from 'enzyme';
describe('<WhatAction />', () => {
    it('Renders without crashing', () => {
        shallow(<WhatAction />);
    });

   
});