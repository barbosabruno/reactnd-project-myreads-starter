import React from 'react';
import { Link } from 'react-router-dom';

const searchTermsURL = 'https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md';

const Notes = () => (
    <div className="notes">
        <strong>NOTES:</strong>
        <p>The search from BooksAPI is limited to a particular set of search terms.</p>
        <p>
            You can find these search terms here: &nbsp;
            <Link to={searchTermsURL} target="_blank">{searchTermsURL}</Link>
        </p>
        <p>However, remember that the BooksAPI.search method DOES search by title or author.</p>
        <p>So, don't worry if you don't find a specific author or title. Every search is limited by search terms.</p>
    </div>
);

export default Notes;
