import IgnoreCase from '../helper/IgnoreCase';

describe('function IgnoreCase', () => {

    it('must return true if exists some term', () => {
        const terms = ['Art', 'Cook', 'Future'];
        const query = 'art';
        const existsTerm = terms.some((term) => IgnoreCase(term, query));

        expect(existsTerm).toBeTruthy();
    });

    it('must return true if not exists any term', () => {
        const terms = ['Art', 'Cook', 'Future'];
        const query = 'lorem ipsum';
        const existsTerm = terms.some((term) => IgnoreCase(term, query));

        expect(existsTerm).toBeFalsy();
    });
});
