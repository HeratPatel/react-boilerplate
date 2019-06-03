import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux";
import Routes from "./routes";

const store = configureStore();

function Main() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default Main;
