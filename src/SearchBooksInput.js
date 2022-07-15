import React from 'react';
import { useState,useEffect  } from "react";

// 'Android', 'Art', 'Artificial Intelligence', 
// 'Astronomy', 'Austen', 'Baseball', 'Basketball', 
// 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 
// 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 
// 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 
// 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 
// 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 
// 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo',
//  'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 
//  'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 
//  'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 
//  'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire',
//   'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 
//   'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

function SearchBooksInput (props){
  const {onSearch}=props;
  // state = {
  //   value: '',
  // };
  const[mysearch,setMysearch]=useState("");
  const handleChange = event => {
    // this.setState({ value: event.target.value });
    const val = event.target.value;
    // this.setState({ value: val }, () => {
    //   // console.log(val);
    //   // if (val.length >= 1) {
    //   this.props.onSearch(val);
    //   // }
    // });

      // try put it here
      setMysearch(val);           //try here if not
      onSearch(val);


  };
 
    return (
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={mysearch}
          placeholder="Search by title or author"
          onChange={handleChange}
          autoFocus
        />
      </div>
    );
  
}

export default SearchBooksInput;
