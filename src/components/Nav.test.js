import React from 'react';
import {shallow, mount} from 'enzyme';

import Nav from './Nav';

describe('<Nav />', () => {
    it('Renders without crashing', () => {
        shallow(<Nav />);
    });

     it('Should call onNewGame when new game is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<Nav handleNewGame = {callback} />);
        const link = wrapper.find(".new");
        
        link.simulate('click', {
            preventDefault() {}
        });

        expect(callback).toHaveBeenCalled();
    });


     it('Should call onwhat when what is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<Nav handleWhatAction = {callback} />);
        const link = wrapper.find(".what");
        link.simulate('click', {
            preventDefault() {}
        });
       expect(callback).toHaveBeenCalled();
    });

    
});


