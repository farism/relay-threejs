import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import * as Template from './Template';

export default makeRouteConfig(
  <Route {...{ path: '/', Component: (props) => props.children }}>
    <Route {...Template.routeConfig('templates/:templateID')} />
  </Route>
);
