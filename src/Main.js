import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import configureStore from "./redux";
import Routes from "./routes";
import { HelmetProvider } from "react-helmet-async";

function Main() {
  const store = configureStore();
  return (
    <StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <Routes />
        </HelmetProvider>
      </Provider>
    </StrictMode>
  );
}

export default Main;
