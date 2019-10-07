import React from 'react';
import Proptypes from 'prop-types';

/**
 * Home
 * @returns {Node}
 */
function Home() {
  return (
    <section>
      <h1>Welcome Home</h1>
    </section>
  );
}

Home.prototype = {
  history: Proptypes.object.isRequired,
  location: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
  staticContext: Proptypes.any,
};

Home.defaultProps = {
  staticContext: null,
};

export default Home;
