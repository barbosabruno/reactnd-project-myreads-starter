import React from 'react';
import { shallow } from 'enzyme';
import NoBooksAvailable from '../components/NoBooksAvailable';

describe('<NoBooksAvailable />', () => {

    it('shallow renders without crashing', () => {
        expect(shallow(<NoBooksAvailable />));
    })
});
