import React from 'react';
import { shallow, mount } from 'enzyme';
import PkDetails from './PkDetails';

let detailComponent;
beforeEach(() => {
    detailComponent = shallow(<PkDetails/>);
});

afterEach(() => {
    detailComponent.unmount();
});

describe('PkDetails Component', () => {
    it('renders without crashing', () => {
        expect(detailComponent.length).toBe(1);
    });
    // it('renders children passed via props', () => {
    //     cardComponent.setProps({
    //         children: 'Hello World!',
    //     });
    //     expect(cardComponent.text()).toBe('Hello World!');
    // });
});