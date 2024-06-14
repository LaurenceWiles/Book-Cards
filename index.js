import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import BooksApp from "./reducers/BooksApp";
import "./styles/main.css";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React & Reduct Project</h1>
      </div>
    );
  }
}

let store = createStore(BooksApp);
console.log(store.getState());

createRoot(document.getElementById("app")).render(<App />);
