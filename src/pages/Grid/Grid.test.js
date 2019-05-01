import React from 'react';
import { shallow, mount } from 'enzyme';
import PkGrid from './PkGrid';

let gridComponent;
beforeEach(() => {
    gridComponent = shallow(<PkGrid/>);
});

afterEach(() => {
    gridComponent.unmount();
});

describe('Grid Component', () => {
    it('renders without crashing', () => {
        expect(gridComponent.length).toBe(1);
    });
    // it('renders children passed via props', () => {
    //     cardComponent.setProps({
    //         children: 'Hello World!',
    //     });
    //     expect(cardComponent.text()).toBe('Hello World!');
    // });
});