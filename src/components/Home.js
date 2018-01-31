import React from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';

const Home = ({ shelves, books, moveBookToShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            {shelves.map((shelf) => (
                <Books
                    key={shelf.title}
                    title={shelf.title}
                    books={shelf.books}
                    moveBookToShelf={moveBookToShelf}
                />
            ))}

            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default Home;
