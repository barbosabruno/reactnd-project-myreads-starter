import React from 'react';

const Notes = () => (
    <div className="notes">
        <strong>NOTES:</strong>
        <p>The search from BooksAPI is limited to a particular set of search terms.</p>
        <p>
            You can find these search terms here: &nbsp;
            <a href="https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md"
            target="_blank">https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md</a>
        </p>
        <p>However, remember that the BooksAPI.search method DOES search by title or author.</p>
        <p>So, don't worry if you don't find a specific author or title. Every search is limited by search terms.</p>
    </div>
);

export default Notes;
