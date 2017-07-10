/**
 * @flow
 * @relayHash 152be8fde276b8dcdffeb31b8eeadd48
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ItemQueryResponse = {|
  +item: ?{|
    +name: ?string;
  |};
|};
*/


/*
query ItemQuery(
  $itemID: ObjID!
) {
  item(id: $itemID) {
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "itemID",
        "type": "ObjID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "itemID",
            "type": "ObjID!"
          }
        ],
        "concreteType": "Item",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "ItemQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "itemID",
        "type": "ObjID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "ItemQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "itemID",
            "type": "ObjID!"
          }
        ],
        "concreteType": "Item",
        "name": "item",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query ItemQuery(\n  $itemID: ObjID!\n) {\n  item(id: $itemID) {\n    name\n  }\n}\n"
};

module.exports = batch;
