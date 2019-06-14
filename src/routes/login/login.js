import React from "react";
import Proptypes from "prop-types";

function Login() {
  return (
    <section>
      <h1>Login Page</h1>
    </section>
  );
}

Login.prototype = {
  history: Proptypes.object.isRequired,
  location: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
  staticContext: Proptypes.any
};

Login.defaultProps = {
  staticContext: null
};

export default Login;
