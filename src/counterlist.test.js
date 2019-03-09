import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CounterList from './counterList';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
    console.log("Before all tests");
})
beforeEach(() => {
    console.log("Before each test")
})
afterAll(() => {
    console.log("After all tests")
})
afterEach(() => {
    console.log("After each test")
})
describe('CounterList Component Tests', () => {
    it('matches CounterList snapshot', () => {
        const tree = renderer.create(<CounterList />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('starts with counter value', () => {
        const wrapper = shallow(<CounterList />);
        const counters = wrapper.find('Counter');
        expect(counters.length).toEqual(0);
    })
    it('can add counter on add counter button click', () => {
        const wrapper = shallow(<CounterList />);
        const addBtn = wrapper.find('button.add');
        addBtn.simulate('click');
        const counters = wrapper.find('Counter');
        expect(counters.length).toEqual(1);
    })
    it('can remove counter on remove counter button click', () => {
        const wrapper = shallow(<CounterList />);
        const removeBtn = wrapper.find('button.remove');
        removeBtn.simulate('click');
        const counters = wrapper.find('Counter');
        expect(counters.length).toEqual(0);
    })
})
