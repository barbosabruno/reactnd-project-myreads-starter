import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI'
import Books from './Books';
import SEARCH_TERMS from '../SearchTerms';

class Search extends Component {
    state = {
        books: [],
        query: ''
    }

    // NOTES: The search from BooksAPI is limited to a particular set of search terms.
    // You can find these search terms here:
    // https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    // However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    // you don't find a specific author or title. Every search is limited by search terms.
    listBooksBySearchTerms = (event) => {
        const query = event.target.value;

        this.setState({ query });

        const searchTerms = SEARCH_TERMS;

        // it must have match to search
        if ( !searchTerms.some((term) => term === query) ) return;

        BooksAPI.search(query)
        .then((result) => {

            if ( result && result.length ) {
                const { books } = this.props;

                result.filter((res) => {
                    return books.forEach((book) => {
                        if ( res.id === book.id ) {
                            res.shelf = book.shelf;
                        }
                    });
                });

                this.setState({ books: result });
            }

            console.log(this.state.books);
        });
    }

    render() {
        const { moveBookToShelf } = this.props;
        const { books, query } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={this.listBooksBySearchTerms}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Books
                        books={books}
                        moveBookToShelf={moveBookToShelf}
                    />
                </div>
            </div>
        );
    }
}

export default Search;
