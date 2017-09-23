import React from 'react'
import BrowserProtocol from 'farce/lib/BrowserProtocol'
import queryMiddleware from 'farce/lib/queryMiddleware'
import createFarceRouter from 'found/lib/createFarceRouter'
import makeRouteConfig from 'found/lib/makeRouteConfig'
import createRender from 'found/lib/createRender'
import {Resolver} from 'found-relay'
import Route from 'found/lib/Route'
// import React from 'react'

import * as UserList from './UserList'
import * as User from './User'
import * as TemplateList from './TemplateList'
import * as Template from './Template'
import * as ItemList from './ItemList'
import * as Item from './Item'

const routes = makeRouteConfig(
  <Route {...{path: '', Component: props => props.children}}>
    <Route {...UserList.routeConfig('users')} />
    <Route {...User.routeConfig('users/:userID')} />
    <Route {...TemplateList.routeConfig('templates')} />
    <Route {...Template.routeConfig('templates/:templateID')} />
    <Route {...ItemList.routeConfig('items')}>
      <Route {...Item.routeConfig(':itemID')} />
    </Route>
  </Route>,
)

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,
  render: createRender({}),
})

export default props => {
  return <Router resolver={new Resolver(props.environment)} />
}
