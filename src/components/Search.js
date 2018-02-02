import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI'
import Books from './Books';
import SEARCH_TERMS from '../SearchTerms';
import PropTypes from 'prop-types';
import IgnoreCase from '../helper/IgnoreCase';
import { Debounce } from 'react-throttle';
import Notes from '../components/Notes';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    }

    state = {
        books: []
    }

    findTermByQuery = (query) => {
        if ( !query ) return;

        const terms = SEARCH_TERMS;
        return terms && terms.some((term) => IgnoreCase(term, query));
    }

    // NOTES: The search from BooksAPI is limited to a particular set of search terms.
    // You can find these search terms here:
    // https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    // However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    // you don't find a specific author or title. Every search is limited by search terms.
    listBooksByTerms = (event) => {
        const query = event.target.value;
        const existsTerm = this.findTermByQuery(query);

        if ( !existsTerm ) {
            this.setState({ books: [] });
            return;
        }

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
        });
    }

    render() {
        const { moveBookToShelf } = this.props;
        const { books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                    <Debounce time="200" handler="onChange">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.listBooksByTerms(event)}
                        />
                    </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                {books && books.length ? (
                    <Books
                        books={books}
                        moveBookToShelf={moveBookToShelf}
                    />
                ) : <Notes />}
                </div>
            </div>
        );
    }
}

export default Search;
