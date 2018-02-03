import React from 'react';
import { shallow } from 'enzyme';
import BooksContent from '../components/BooksContent';

describe('<BooksContent />', () => {

    it(`shallow renders without crashing if the component receive the required props`, () => {
        expect(shallow(
            <BooksContent
                books={[{
                    authors: ['Vipul A M', 'Prathamesh Sonpatki'],
                    id: 'Ht3JDAAAQBAJ',
                    imageLinks: {
                        thumbnail: 'http://books.google.com/books/content?id=Ht3JDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
                    },
                    shelf: 'currentlyReading',
                    title: 'ReactJS by Example - Building Modern Web Applications with React'
                }]}
                moveBookToShelf={() => {}}
            />
        ));
    });
});
