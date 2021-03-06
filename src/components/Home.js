import React from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import PropTypes from 'prop-types';
import NoBooksAvailable from '../components/NoBooksAvailable';

const Home = ({ shelves, books, moveBookToShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            {shelves && shelves.length ? shelves.map((shelf) => (
                <Books
                    key={shelf.title}
                    title={shelf.title}
                    books={shelf.books}
                    moveBookToShelf={moveBookToShelf}
                />
            )) : <NoBooksAvailable />}

            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

Home.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
}

export default Home;
