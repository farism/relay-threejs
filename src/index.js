import fetch from 'isomorphic-fetch'
import {
  Environment,
  Network,
  RecordSource,
  Store,
  commitMutation,
  commitLocalUpdate,
} from 'relay-runtime'
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App'

const fetchQuery = (
  operation,
  variables,
  cacheConfig,
  uploadables,
) => {
  return fetch('/graphql/query', {
    method: 'POST',
    headers: {
      // Add authentication and other headers here
      // 'Authorization': document.querySelector('meta[name="jwt-token"]').getAttribute('content'),
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store,
})

const load = () => render((
  <AppContainer>
    <App environment={environment} />
  </AppContainer>
), document.getElementById('report-viewer'));

// if (module.hot) {
//   module.hot.accept('./App', load);
// }

load();
