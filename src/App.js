import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import React from 'react';
import { useState,useEffect  } from "react";
import {  Route } from "react-router-dom";
import { debounce } from 'throttle-debounce';
// import { Fade } from "react-awesome-reveal";
// import { Card ,Dropdown} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import TextField from "@mui/material/TextField";
// import {IconButton} from "@mui/material"
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function App() {
  const bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ];
  // state = {
  //   myBooks: [],
  //   searchBooks: [],
  // };
  const [allbooks,setAllbooks]=useState([]);
  const [searchBooks,setSearchbooks]=useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books)=>{
      setAllbooks(books);
      console.log("App.js all books");
    });
    
  },[]);



  const moveBook = (book, shelf) => {
    // update db
    BooksAPI.update(book, shelf);
    // BooksAPI.update(book, shelf).then(books => {
    //   console.log(books);
    // });

    let updatedBooks = [];
    updatedBooks = allbooks.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    // console.log('updated books len', updatedBooks.length);
    // this.setState({
    //   myBooks: updatedBooks,
    // });
    setAllbooks(updatedBooks);

  };
 const searchForBooks = debounce(300, false, query => {
    // console.log(query);
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        // console.log('result', books);
        if (books.error) {
          setSearchbooks([] );
        } else {
          setSearchbooks(books );
        }
      });
    } else {
      setSearchbooks([] );
    }
  });

  const resetSearch = () => {
    setSearchbooks([] );
  };


  // const myBooks = allbooks;
  // const searchBooks = searchBooks;
  return(
  
  
    
      <div className="app">
        
    
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              bookshelves={bookshelves}
              books={allbooks}
              onMove={moveBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              myBooks={allbooks}
              onSearch={searchForBooks}
              onMove={moveBook}
              onResetSearch={resetSearch}
            />
          )}
        />
      </div>
    
  );
}

export default App;
