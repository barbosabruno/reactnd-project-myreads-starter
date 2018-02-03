import React from 'react';
import { mount } from 'enzyme';
import Books from '../components/Books';

describe('<Books />', () => {

    it(`mount without crashing if the component receive the required props`, () => {
        expect(mount(
            <Books
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

    it(`mount without crashing if the component receive the all props`, () => {
        expect(mount(
            <Books
                title="Currently Reading"
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
