import React from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Action from "./actions/Action";
import Reducer from "./reducers/Reducer";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

class App extends React.Component {
  render() {
    return (
      <div>
        <Action store={store} />
      </div>
    );
  }
}
const middleware = applyMiddleware(promise(), thunk);
let store = createStore(Reducer, middleware);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
