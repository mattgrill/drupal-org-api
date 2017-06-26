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

### `exports.node(filterOptions, type)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**type**: `String`, The response format if the api resource supports multiple formats.

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.user(filterOptions, type)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**type**: `String`, The response format if the api resource supports multiple formats.

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.comment(filterOptions, type)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**type**: `String`, The response format if the api resource supports multiple formats.

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.file(fileID, type)`

**Parameters**

**fileID**: `String`, The ID of the file.

**type**: `String`, The response format if the api resource supports multiple formats.

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.maintainers(projectID)`

**Parameters**

**projectID**: `String`, The ID of the project, ie. `Drupal`

**Returns**: `Promise`, Pending `issueRequest` promise.

### `exports.ci(filterOptions, type)`

**Parameters**

**filterOptions**: `Object`, Query string filter options

**type**: `String`, The response format if the api resource supports multiple formats.

**Returns**: `Promise`, Pending `issueRequest` promise.

## License

MIT
