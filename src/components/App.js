import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import Home from './Home';
import Search from './Search';
import './App.css';

const CURRENTLY_READING = 'currentlyReading';
const WANT_TO_READ = 'wantToRead';
const READ = 'read';

class BooksApp extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        BooksAPI.getAll()
        .then((books) => this.setState({ books }));
    }

    moveBookToShelf = (book, shelf) => {

        if ( book.shelf === shelf ) return;

        book.shelf = shelf;

        BooksAPI.update(book, shelf)
        .then(() => {
            this.setState((prevState) => ({
                books: prevState.books.filter((b) => b.id !== book.id).concat([ book ])
            }));
        });
    }

    booksByShelf = (books) => {
        const byShelfCurrentlyReading = (book) => book.shelf === CURRENTLY_READING;
        const byShelfWantToRead = (book) => book.shelf === WANT_TO_READ;
        const byShelfRead = (book) => book.shelf === READ;

        return [
            {
                title: 'Currently Reading',
                books: books.filter(byShelfCurrentlyReading)
            },
            {
                title: 'Want to Read',
                books: books.filter(byShelfWantToRead)
            },
            {
                title: 'Read',
                books: books.filter(byShelfRead)
            }
        ];
    }

    render() {
        const { books } = this.state;
        const shelves = this.booksByShelf(books);

        console.log(shelves)

        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <Home
                        shelves={shelves}
                        books={books}
                        moveBookToShelf={this.moveBookToShelf}
                    />
                )}/>
                <Route path="/search" render={() => (
                    <Search
                        books={books}
                        moveBookToShelf={this.moveBookToShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp;
