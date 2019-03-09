import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
// import renderer from 'react-test-renderer';

import Counter from './counter';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter Component Test', () => {
    // it('matches the snapshot', () => {
    //     const tree = renderer.create(<Counter />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // })
    it('starts with count = 0', () => {
        const wrapper = shallow(<Counter />)
        let output = wrapper.find('p').text();
        expect(output).toBe('Current Count Value: 0')
    })

    it('can increment count on increment button click', () => {
        const wrapper = shallow(<Counter />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        let output = wrapper.find('p').text();
        expect(output).toBe('Current Count Value: 1');
    })

    it('can decrement count on decrement button click', () => {
        const wrapper = shallow(<Counter />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        let output = wrapper.find('p').text();
        expect(output).toBe('Current Count Value: -1');
    })
})

