import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './GuessForm';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    // it('Should fire the onGuess callback when the form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<GuessForm handleSubmit={callback} />);
        
    //     wrapper.find('.button').simulate('submit');
    //     expect(callback).toHaveBeenCalled();

    // });

  
});