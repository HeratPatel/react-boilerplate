import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";

// Routes Lazy Load
const HomeRoute = lazy(() => import("./home"));

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomeRoute} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default AppRouter;
