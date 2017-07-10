import { graphql } from 'graphql';
import React, { PropTypes } from 'react';
import Route from 'found/lib/Route';
import { getContext } from 'recompose';

import prepareIdVariables from './prepareIdVariables';

const relayContext = (Component) => getContext({
  relay: PropTypes.shape({}),
})(Component);

export const query = graphql`
  query TemplateQuery($templateID: ObjID!) {
    template(id: $templateID) {
      id
      name
    }
  }
`;

export const Component = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export const routeConfig = path => ({
  Component: Component,
  path,
  prepareVariables: prepareIdVariables('templateID'),
  query,
});
