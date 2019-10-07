import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from 'components/Loading';

// Private Route
import RouteAuth from 'hocs/RouteAuthentication';

// Routes Lazy Load
const HomeRoute = lazy(() => import('./home'));
const LoginRoute = lazy(() => import('./login'));
const ProfileRoute = lazy(() => import('./profile'));
const RouteNotFound = lazy(() => import('./404'));

/**
 * AppRouter
 * @returns {Node}
 */
function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/home" component={HomeRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <RouteAuth
            exact
            isLoggedIn
            path="/profile"
            component={ProfileRoute}
          />
          <Route component={RouteNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
