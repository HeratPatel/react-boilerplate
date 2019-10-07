/* eslint-disable react/prop-types */
import React from 'react';
import Proptypes from 'prop-types';

/**
 * Profile
 * @param {Object} param0
 * @returns {Node}
 */
function Profile({ demo, actions }) {
  /**
   * handleOnChange
   * @param {Object} event
   * @returns {any}
   */
  function handleOnChange(event) {
    actions.demoAction(event.target.value);
  }

  return (
    <section>
      <h1>Profile Page</h1>
      <p>
        <strong>Demo Redux Selector: </strong>
        {demo}
      </p>
      <input type="text" onChange={handleOnChange} />
    </section>
  );
}

Profile.prototype = {
  history: Proptypes.object.isRequired,
  location: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
  staticContext: Proptypes.any,
};

Profile.defaultProps = {
  staticContext: null,
};

export default Profile;
