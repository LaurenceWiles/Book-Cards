import react from "react";

const AddBook = (index) => {
  const ADD_BOOK = "ADD_BOOK";
  return {
    type: ADD_BOOK,
    payload: {
      id: index,
      cover:
        "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
      title: "React.js for the Visual Learner",
      author: "Mike Mangialardi",
      link: "https://leanpub.com/reactjsforthevisuallearner",
    },
  };
};
export default AddBook;
