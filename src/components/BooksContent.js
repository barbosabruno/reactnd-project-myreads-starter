import React from 'react';
import PropTypes from 'prop-types';

const BooksContent = ({ books, moveBookToShelf }) => {
    return (
        <ol className="books-grid">
            {books
                .map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                            <select
                                value={book.shelf ? book.shelf : 'none'}
                                onChange={(event) => moveBookToShelf(book, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors && book.authors.length > 1 ? book.authors.join(', ') : book.authors}</div>

                        {/* INFO */}
                        <div className="book-title" style={{color: 'red'}}>{book.shelf ? book.shelf : 'NONE'}</div>

                    </div>
                </li>
            ))}
        </ol>
    );
}

BooksContent.propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
}

export default BooksContent;
