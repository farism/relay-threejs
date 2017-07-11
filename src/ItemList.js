import {graphql} from 'graphql'
import React, {PropTypes} from 'react'
import {Link} from 'found'
import {getContext} from 'recompose'

const relayContext = Component =>
  getContext({
    relay: PropTypes.shape({}),
  })(Component)

export const query = graphql`
  query ItemListQuery {
    items {
      count
      data {
        id
        name
      }
    }
  }
`

export const Component = props => {
  return (
    <div>
      <ul>
        {props.items.data.map(item =>
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.name}
            </Link>
          </li>,
        )}
      </ul>
      {props.children}
    </div>
  )
}

export const routeConfig = path => ({
  Component: Component,
  path,
  query,
})
