const axios = require('axios');
const qs = require('qs');

/**
 * Drupal.org HTTP API Wrapper
 * @type {Class}
 */
module.exports = class {
  constructor() {
    this.axios = axios;
    this.base = 'https://www.drupal.org/api-d7/';
    this.methods = {
      GET: 'get',
    };
  }
  /**
   * Request wrapper.
   * @param  {String} method
   *   Method for the HTTP request.
   * @param  {String} url
   *   The URL for the HTTP request.
   * @return {Promise}
   *   The response from the Drupal.org HTTP api.
   */
  issueRequest(method, url) {
    return this.axios({ method, url })
      .then(({ data }) => Promise.resolve(data))
      .catch(Promise.reject);
  }
  /**
   * Node
   * @param  {Object} filterOptions
   *   Query string filter options
   * @param  {String} [type='json']
   *   The response format if the api resource supports multiple formats.
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  node(filterOptions, type = 'json') {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}node.${type}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * User
   * @param  {Object} filterOptions
   *   Query string filter options
   * @param  {String} [type='json']
   *   The response format if the api resource supports multiple formats.
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  user(filterOptions, type = 'json') {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}user.${type}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * Comments
   * @param  {Object} filterOptions
   *   Query string filter options
   * @param  {String} [type='json']
   *   The response format if the api resource supports multiple formats.
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  comment(filterOptions, type = 'json') {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}comment.${type}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * Files
   * @param  {String} fileID
   *   The ID of the file.
   * @param  {String} [type='json']
   *   The response format if the api resource supports multiple formats.
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  file(fileID, type = 'json') {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}file/${String(fileID)}.${type}`);
  }
  /**
   * Maintainers
   * @param  {String} projectID
   *   The ID of the project, ie. `Drupal`
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  maintainers(projectID) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}project/${projectID}/matainers.json`);
  }
  /**
   * DrupalCI Jobs
   * @param  {Object} filterOptions
   *   Query string filter options
   * @param  {String} [type='json']
   *   The response format if the api resource supports multiple formats.
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  ci(filterOptions, type = 'json') {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}pift_ci_job.${type}?${qs.stringify(filterOptions, { indices: false })}`);
  }

};
