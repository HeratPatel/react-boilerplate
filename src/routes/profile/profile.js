import React from "react";
import Proptypes from "prop-types";

function Profile() {
  return (
    <section>
      <h1>Profile Page</h1>
    </section>
  );
}

Profile.prototype = {
  history: Proptypes.object.isRequired,
  location: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
  staticContext: Proptypes.any
};

Profile.defaultProps = {
  staticContext: null
};

export default Profile;
