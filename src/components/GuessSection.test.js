import React from 'react';
import {shallow,mount} from 'enzyme';

import GuessSection from './GuessSection';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });
it('Can make guesses', () => {

	const wrapper = mount(<GuessSection />);
	

   wrapper.setState({
            secretNumber: 100,
            value:25
        });

   wrapper.instance().generateFeedback();
   expect(wrapper.state('userFeedback')).toEqual('cold');
   

    wrapper.setState({
            secretNumber: 100,
            value:99
        });

   wrapper.instance().generateFeedback();
   expect(wrapper.state('userFeedback')).toEqual('hot');


    wrapper.setState({
            secretNumber: 100,
            value:75
        });

   wrapper.instance().generateFeedback();
   expect(wrapper.state('userFeedback')).toEqual('less than warm');
   

    wrapper.setState({
            secretNumber: 100,
            value:81
        });

   wrapper.instance().generateFeedback();
   expect(wrapper.state('userFeedback')).toEqual('Kinda hot');
});

});
