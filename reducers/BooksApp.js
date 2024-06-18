const initialState = {
  books: [
    {
      id: 0,
      cover:
        "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
      title: "React.js for the Visual Learner",
      author: "Mike Mangialardi",
      link: "https://leanpub.com/reactjsforthevisuallearner",
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.slice(0, -1),
      };
    case "EDIT_BOOK":
      const { updatedBook } = action.payload;
      return {
        ...state,
        books: state.books.map((book) => ({
          ...book,
          ...updatedBook,
        })),
      };
    default:
      return state;
  }
};

export default bookReducer;
