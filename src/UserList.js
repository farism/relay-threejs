import {graphql} from 'graphql'
import React, {PropTypes} from 'react'
import Route from 'found/lib/Route'
import {getContext} from 'recompose'

import prepareIdVariables from './prepareIdVariables'

const relayContext = Component =>
  getContext({
    relay: PropTypes.shape({}),
  })(Component)

export const query = graphql`
  query UserListQuery {
    users {
      id
      email
      name
    }
  }
`

export const Component = props => {
  return (
    <div>
      <ul>
        {props.users.map(user =>
          <li>
            {user.name}
          </li>,
        )}
      </ul>
    </div>
  )
}

export const routeConfig = path => ({
  Component: Component,
  path,
  query,
})
