import React from "react";
import BookCard from "../presentationals/BookCard";
import { useSelector, useDispatch } from "react-redux";
import AddBook from "../../actions/AddBook";
import DeleteBook from "../../actions/DeleteBook";
import EditBook from "../../actions/EditBook";

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const dispatchAction = (input, id = null) => {
    console.log(`Dispatching action: ${input}`);
    switch (input) {
      case "TRASH":
        dispatch(DeleteBook(id));
        break;
      case "PLUS":
        dispatch(AddBook(books.length));
        break;
      case "PENCIL":
        dispatch(EditBook());
        break;
      default:
        break;
    }
  };

  const bookItems = books.map((book, index) => (
    <BookCard key={index} stateProps={book} dispatchAction={dispatchAction} />
  ));

  console.log(books);

  return <div className="books-container">{bookItems}</div>;
};

export default Books;
