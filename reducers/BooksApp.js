import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: 0,
        cover:
          "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
        title: "React.js for the Visual Learner",
        author: "Mike Mangialardi",
        link: "https://leanpub.com/reactjsforthevisuallearner",
      },
      {
        id: 1,
        cover:
          "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
        title: "React.js for the Visual Learner",
        author: "Mike Mangialardi",
        link: "https://leanpub.com/reactjsforthevisuallearner",
      },
      {
        id: 2,
        cover:
          "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
        title: "React.js for the Visual Learner",
        author: "Mike Mangialardi",
        link: "https://leanpub.com/reactjsforthevisuallearner",
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
