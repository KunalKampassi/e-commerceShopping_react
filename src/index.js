import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./reducers/configureStore";
import ErrorWrapper from "./ErrorWrapper/ErrorWrapper";

import * as serviceWorker from "./serviceWorker";

ReactDOM.hydrate(
  <React.StrictMode>
    <ErrorWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>
    </ErrorWrapper>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
