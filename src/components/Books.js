import React from 'react';
import BooksContent from './BooksContent';

const Books = ({ title, books, moveBookToShelf }) => {
    return (
        <div>
        {title ? (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <BooksContent
                            books={books}
                            moveBookToShelf={moveBookToShelf}
                        />
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

export default Books;
