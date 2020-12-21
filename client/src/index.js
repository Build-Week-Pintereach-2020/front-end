import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import Title from "./components/Title";
import List from "./components/List";
// import { titleReducer } from "./reducers/titleReducer";
// import { recipesReducer } from "./reducers/recipesReducer";
import rootReducer from "./reducers";

import "./styles.css";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`preve state: `, store.getState());
  console.log(`action: `, action);
  next(action);
  console.log("new state: ", store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title id="0" />
      <List id="1" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App id="2" />
  </Provider>,
  rootElement
);
