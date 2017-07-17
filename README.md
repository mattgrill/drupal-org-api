# Drupal.org HTTP API

A wrapper for the Drupal.org HTTP API. For more information and _some_ available filtering options see the [official documentation](https://www.drupal.org/drupalorg/docs/api).

## Setup
```shell
yarn install drupal-org-api
```

## Usage
```javascript
const DrupalAPI = require('drupal-org-api');
const drupalapi = new DrupalAPI();
```

### `exports.node(filterOptions)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.user(filterOptions)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.comment(filterOptions)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.file(fileID)`

**Parameters**

**fileID**: `String`, The ID of the file.

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.maintainers(projectID)`

**Parameters**

**projectID**: `String`, The ID of the project, ie. `Drupal`

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.ci(filterOptions)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.taxonomyTerm(filterOptions)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**Returns**: `Promise`, Pending `issueRequest` promise.

## License

MIT
