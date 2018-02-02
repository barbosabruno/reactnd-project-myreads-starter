import React from 'react';
import BooksContent from './BooksContent';
import PropTypes from 'prop-types';
import NoBooksAvailable from '../components/NoBooksAvailable';

const Books = ({ title, books, moveBookToShelf }) => {
    return (
        <div>
        {title ? (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                    {books && books.some((book) => book.id) ? (
                        <BooksContent
                            books={books}
                            moveBookToShelf={moveBookToShelf}
                        />
                    ) : <NoBooksAvailable />}
                    </div>
                </div>
            </div>
        ) : (
            <BooksContent
                books={books}
                moveBookToShelf={moveBookToShelf}
            />
        )}
        </div>
    );
}

Books.propTypes = {
    title: PropTypes.string,
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
}

export default Books;
