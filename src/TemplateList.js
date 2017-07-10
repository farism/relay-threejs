import { graphql } from 'graphql';
import React, { PropTypes } from 'react';
import Route from 'found/lib/Route';
import { getContext } from 'recompose';

import prepareIdVariables from './prepareIdVariables';

const relayContext = (Component) => getContext({
  relay: PropTypes.shape({}),
})(Component);

export const query = graphql`
  query TemplateListQuery {
    templates {
      id
      name
    }
  }
`;

export const Component = (props) => {
  return (
    <div>
      <ul>
        {props.templates.map(template => (
          <li>{template.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const routeConfig = path => ({
  Component: Component,
  path,
  query,
});
