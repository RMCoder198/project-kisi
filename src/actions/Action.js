import React from "react";

import Home from "../components/Home";
import { getState } from "redux";

import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import Kisi from "kisi-client";
import List from "../components/List";
const kisiClient = new Kisi();
kisiClient.setLoginSecret("94c2056abb993b570517f2d3a89c9b5a");
class Action extends React.Component {
  dispatchAction(input, change, index, length) {
    switch (input) {
      case "getlocks":
        this.props.store.dispatch(dispatch => {
          kisiClient
            .get("locks")
            .then(lock => {
              let a = lock["data"].length;
              const b = [];
              const c = [];
              for (let i = 0; i < a; i++) {
                b[i] = lock["data"][i]["id"];
              }
              for (let i = 0; i < a; i++) {
                c[i] = "start";
              }
              dispatch({ type: "locks", locks: b, status: c });
            })
            .catch(error => {
              dispatch({ type: "locks", locks: error });
            });
        });
        break;
      case "unlock":
        this.props.store.dispatch(dispatch => {
          let c = [];
          for (let i = 0; i < length; i++) {
            c[i] = "start";
          }
          c[index] = "progress";
          dispatch({ type: "unlock", status: c });
          let url = "locks/" + change + "/unlock";
          kisiClient
            .post(url, {})
            .then(result => {
              c[index] = "success";
              dispatch({ type: "unlock", status: c });
            })
            .catch(error => {
              c[index] = "failed";
              dispatch({ type: "unlock", status: c });
            });
        });

        break;
    }
  }

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  render() {
    const stateProps = this.props.store.getState();

    const home = (
      <Home
        stateProps={stateProps}
        dispatchAction={this.dispatchAction.bind(this)}
      />
    );
    const list = (
      <List
        stateProps={stateProps}
        items={stateProps.locks}
        dispatchAction={this.dispatchAction.bind(this)}
      />
    );

    return (
      <div>
        {home}
        {list}
      </div>
    );
  }
}
export default Action;
