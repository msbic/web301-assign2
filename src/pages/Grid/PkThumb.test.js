import React from 'react';
import { shallow, mount } from 'enzyme';
import PkThumb from './PkThumb';

let thumbComponent;
let obj = {
        name: "flareon",
        url: "https://pokeapi.co/api/v2/pokemon/136",
};

beforeEach(() => {
    thumbComponent = shallow(<PkThumb>{obj}</PkThumb>);
});

afterEach(() => {
    thumbComponent.unmount();
});

describe('Thumbnail Component', () => {
    it('renders without crashing', () => {
        expect(thumbComponent.length).toBe(1);
    });
    
     it('icon img test', () => {
         
        expect(thumbComponent.contains(<img>Thor</img>)).toBeTruthy();

         
     });
});