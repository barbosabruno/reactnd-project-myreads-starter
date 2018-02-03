import React from 'react';
import { shallow } from 'enzyme';
import SearchTerms from '../SearchTerms';

describe('array SearchTerms', () => {

    it('must return an array of terms', () => {
        expect(SearchTerms).not.toBeNull();
    })
});
