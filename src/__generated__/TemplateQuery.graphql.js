/**
 * @flow
 * @relayHash 3c276d0e0f2b32f9cc009fe0c969c457
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type TemplateQueryResponse = {|
  +template: ?{|
    +id: any;
    +name: string;
  |};
|};
*/


/*
query TemplateQuery(
  $templateID: ObjID!
) {
  template(id: $templateID) {
    id
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "templateID",
        "type": "ObjID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TemplateQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "templateID",
            "type": "ObjID!"
          }
        ],
        "concreteType": "Template",
        "name": "template",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
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
  "name": "TemplateQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "templateID",
        "type": "ObjID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TemplateQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "templateID",
            "type": "ObjID!"
          }
        ],
        "concreteType": "Template",
        "name": "template",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
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
  "text": "query TemplateQuery(\n  $templateID: ObjID!\n) {\n  template(id: $templateID) {\n    id\n    name\n  }\n}\n"
};

module.exports = batch;
