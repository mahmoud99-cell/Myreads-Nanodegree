import React from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';

function SearchBooks (props) {
 
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove,
    } = props;
    // console.log(books);
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
        <SearchResults
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  
}

export default SearchBooks;
