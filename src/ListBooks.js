import React from 'react';
import Bookcase from './Bookcase';
import OpenSearchButton from './OpenSearchButton';

function ListBooks (props){
  
    const { bookshelves, books, onMove } = props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookcase bookshelves={bookshelves} books={books} onMove={onMove} />
        <OpenSearchButton />
      </div>
    );
  
}

export default ListBooks;
