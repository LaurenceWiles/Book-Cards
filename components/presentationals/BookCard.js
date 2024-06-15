import React from "react";

const BookCard = ({ stateProps }) => {
  return (
    <div className="book-card">
      <img style={{ width: 250, height: 323 }} src={stateProps.cover} />
      <h2>{stateProps.title}</h2>
      <h3>{stateProps.author}</h3>
      <a href={stateProps.link}>{stateProps.link}</a>
      <br />
      <i className="icon fa fa-pencil" aria-hidden="true"></i>
      <i className="icon fa fa-trash" aria-hidden="true"></i>
      <i className="icon fa fa-plus" aria-hidden="true"></i>
    </div>
  );
};

export default BookCard;
