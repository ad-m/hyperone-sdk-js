/**
 * HyperOne API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
        define(['ApiClient', 'model/InlineObject', 'model/InlineObject1', 'model/Project'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/InlineObject'), require('../model/InlineObject1'), require('../model/Project'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.ProjectApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.InlineObject, root.HyperOneApi.InlineObject1, root.HyperOneApi.Project);
    }
}(this, function(ApiClient, InlineObject, InlineObject1, Project) {
    'use strict';

    /**
   * Project service.
   * @module api/ProjectApi
   * @version 1
   */

    /**
   * Constructs a new ProjectApi.
   * @alias module:api/ProjectApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;



        /**
     * Create
     * Create project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
        this.createProjectWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = opts.inlineObject;


            const pathParams = {
            };
            const queryParams = {
            };
            const collectionQueryParams = {
            };
            const headerParams = {
            };
            const formParams = {
            };

            const authNames = ['Project', 'ServiceAccount', 'Session'];
            const contentTypes = ['application/json'];
            const accepts = ['application/json'];
            const returnType = Project;

            return this.apiClient.callApi(
                '/project', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Create
     * Create project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
        this.createProject = function(opts) {
            return this.createProjectWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * List
     * List project
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.limit Filter by $limit
     * @param {String} opts.active Filter by active
     * @param {String} opts.organisation Filter by organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Project>} and HTTP response
     */
        this.listProjectWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = null;


            const pathParams = {
            };
            const queryParams = {
                name: opts.name,
                $limit: opts.limit,
                active: opts.active,
                organisation: opts.organisation,
            };
            const collectionQueryParams = {
            };
            const headerParams = {
            };
            const formParams = {
            };

            const authNames = ['Project', 'ServiceAccount', 'Session'];
            const contentTypes = [];
            const accepts = ['application/json'];
            const returnType = [Project];

            return this.apiClient.callApi(
                '/project', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * List
     * List project
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.limit Filter by $limit
     * @param {String} opts.active Filter by active
     * @param {String} opts.organisation Filter by organisation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Project>}
     */
        this.listProject = function(opts) {
            return this.listProjectWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Find by ID
     * Returns a single project
     * @param {String} projectId ID of project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
        this.showProjectWithHttpInfo = function(projectId) {
            const postBody = null;

            // verify the required parameter 'projectId' is set
            if (projectId === undefined || projectId === null) {
                throw new Error("Missing the required parameter 'projectId' when calling showProject");
            }


            const pathParams = {
                projectId: projectId,
            };
            const queryParams = {
            };
            const collectionQueryParams = {
            };
            const headerParams = {
            };
            const formParams = {
            };

            const authNames = ['Project', 'ServiceAccount', 'Session'];
            const contentTypes = [];
            const accepts = ['application/json'];
            const returnType = Project;

            return this.apiClient.callApi(
                '/project/{projectId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Find by ID
     * Returns a single project
     * @param {String} projectId ID of project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
        this.showProject = function(projectId) {
            return this.showProjectWithHttpInfo(projectId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Update by ID
     * Returns modified project
     * @param {String} projectId ID of project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
        this.updateProjectWithHttpInfo = function(projectId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject1;

            // verify the required parameter 'projectId' is set
            if (projectId === undefined || projectId === null) {
                throw new Error("Missing the required parameter 'projectId' when calling updateProject");
            }


            const pathParams = {
                projectId: projectId,
            };
            const queryParams = {
            };
            const collectionQueryParams = {
            };
            const headerParams = {
            };
            const formParams = {
            };

            const authNames = ['Project', 'ServiceAccount', 'Session'];
            const contentTypes = ['application/json'];
            const accepts = ['application/json'];
            const returnType = Project;

            return this.apiClient.callApi(
                '/project/{projectId}', 'PATCH',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Update by ID
     * Returns modified project
     * @param {String} projectId ID of project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
        this.updateProject = function(projectId, opts) {
            return this.updateProjectWithHttpInfo(projectId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };
    };

    return exports;
}));
