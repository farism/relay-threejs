import makeRouteConfig from 'found/lib/makeRouteConfig';
import Route from 'found/lib/Route';
import React from 'react';

import * as UserList from './UserList';
import * as User from './User';
import * as TemplateList from './TemplateList';
import * as Template from './Template';
import * as ItemList from './ItemList';
import * as Item from './Item';

export default makeRouteConfig(
  <Route {...{ path: '', Component: (props) => props.children }}>
    <Route {...UserList.routeConfig('users')} />
    <Route {...User.routeConfig('users/:userID')} />
    <Route {...TemplateList.routeConfig('templates')} />
    <Route {...Template.routeConfig('templates/:templateID')} />
    <Route {...ItemList.routeConfig('items')}>
      <Route {...Item.routeConfig(':itemID')} />
    </Route>
  </Route>
);
