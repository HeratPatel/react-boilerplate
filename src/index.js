import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import * as serviceWorker from "tools/serviceWorker";

render(<Main />, document.getElementById("root"));

// Registering service worker
serviceWorker.register();
