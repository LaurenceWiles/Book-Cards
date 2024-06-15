import React from "react";
import BookCard from "../presentationals/BookCard";
import { useSelector } from "react-redux";

const Books = () => {
  const books = useSelector((state) => state.books);

  const bookItems = books.map((book, index) => (
    <BookCard key={index} stateProps={book} />
  ));

  return <div className="books-container">{bookItems}</div>;
};

export default Books;
