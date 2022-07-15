import React from 'react';
import { useState} from "react";
import { Fade } from "react-awesome-reveal";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  


const Book = props => {
  const { book, shelf, onMove } = props;  
  const [hover, setHover] = useState();

  const handleMouseIn = () => {
    setHover(true);
  };
  
  const handleMouseOut = () => {
    setHover(false);
  };

  const [myshelf,setMyshelf]=useState(shelf);

  const handleChangeShelf = event => {
    setMyshelf( event.target.value );
    onMove(book, event.target.value);
  };



  return (
    <div onMouseEnter={handleMouseIn}
    onMouseLeave={handleMouseOut} className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage:
          `url(${book.imageLinks && book.imageLinks.thumbnail})`  ,
        }}
      ></div>


    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>

    {hover? <Fade>
      <div className="book-shelf-changer">
      <select value={myshelf} onChange={handleChangeShelf} >
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
        
        <br></br>
        <Card

  style={{ width: '18rem' }}
  className="mb-2"
>
  <Card.Body>
    <Card.Title>Description </Card.Title>
    <Card.Text>
    <strong> <i><small> {book.description}</small> </i></strong>
    </Card.Text>
  </Card.Body>
</Card>
        
        </Fade>: <></>}
  </div>

  );
};

export default Book;
