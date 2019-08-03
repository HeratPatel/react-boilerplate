import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

/**
 * ReactHelmet: Dynamically loads page title and description
 * @param {Node} WrappedComponent
 * @param {String} title
 * @param {String} description
 */
function ReactHelmet(WrappedComponent, title, description) {
  return function ReactHelmetComponent(props) {
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
}

export default ReactHelmet;
