import React from 'react';
import { shallow } from 'enzyme';
import Notes from '../components/Notes';

describe('<Notes />', () => {

    it('shallow renders without crashing', () => {
        expect(shallow(<Notes />));
    })
});
