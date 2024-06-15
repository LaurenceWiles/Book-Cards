import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import BooksApp from "./reducers/BooksApp";
import "./styles/main.css";
import { createRoot } from "react-dom/client";
import Books from "./components/containers/Books";

const App = () => {
  return (
    <div>
      <Books store={store} />
    </div>
  );
};

const store = configureStore({ reducer: BooksApp });
console.log(store.getState());

createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
