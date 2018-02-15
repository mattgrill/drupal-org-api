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
    this.format = 'json';
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
      .then(({ data }) => data);
  }
  /**
   * Node
   * @param  {Object} [filterOptions={}]
   *   Query string filter options
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  node(filterOptions = {}) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}node.${this.format}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * User
   * @param  {Object} [filterOptions={}]
   *   Query string filter options
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  user(filterOptions = {}) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}user.${this.format}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * Comments
   * @param  {Object} [filterOptions={}]
   *   Query string filter options
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  comment(filterOptions = {}) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}comment.${this.format}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * Files
   * @param  {String} fileID
   *   The ID of the file.
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  file(fileID) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}file/${fileID}.${this.format}`);
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
      `${this.base}project/${projectID}/maintainers.json`);
  }
  /**
   * DrupalCI Jobs
   * @param  {Object} [filterOptions={}]
   *   Query string filter options
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  ci(filterOptions = {}) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}pift_ci_job.${this.format}?${qs.stringify(filterOptions, { indices: false })}`);
  }

  /**
   * Taxonomy Term
   * @param  {Object} [filterOptions={}]
   *   Query string filter options
   * @return {Promise}
   *   Pending issueRequest promise.
   */
  taxonomyTerm(filterOptions = {}) {
    return this.issueRequest(
      this.methods.GET,
      `${this.base}taxonomy_term.${this.format}?${qs.stringify(filterOptions, { indices: false })}`);
  }
  /**
   * getRelatedComments
   * Related Comments Request wrapper.
   * @param  {Array} commentIds
   *   Comment IDs from a node query.
   * @return {Promise}
   *   The response from the Drupal.org HTTP api.
   */
  getRelatedComments(commentIds) {
    return Array.isArray(commentIds) && commentIds.length
      ? Promise.all(commentIds.map(cid => this.comment({ cid })))
      .then(commentEntities => commentEntities.map(commentEntity => commentEntity.list[0])) :
      Promise.reject('No Comments available.');
  }
  /**
   * getRelatedTaxonomyTerms
   * Related Taxonomy Term Request wrapper.
   * @param  {Array} taxonomyTermIds
   *   Taxonomy IDs from a node query.
   * @return {Promise}
   *   The response from the Drupal.org HTTP api.
   */
  getRelatedTaxonomyTerms(taxonomyTermIds) {
    return Array.isArray(taxonomyTermIds) && taxonomyTermIds.length ?
      Promise.all(taxonomyTermIds.map(tid => this.taxonomyTerm({ tid })))
      .then(taxonomyEntities => taxonomyEntities.map(taxonomyEntity => taxonomyEntity.list[0])) :
      Promise.reject('No Taxonomy Terms available.');
  }
};
