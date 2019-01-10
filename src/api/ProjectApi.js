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
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createProject operation.
     * @callback module:api/ProjectApi~createProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Create project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/ProjectApi~createProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    this.createProject = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Project;

      return this.apiClient.callApi(
        '/project', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listProject operation.
     * @callback module:api/ProjectApi~listProjectCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Project>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List project
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.limit Filter by $limit
     * @param {String} opts.active Filter by active
     * @param {String} opts.organisation Filter by organisation
     * @param {module:api/ProjectApi~listProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Project>}
     */
    this.listProject = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        '$limit': opts['limit'],
        'active': opts['active'],
        'organisation': opts['organisation'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Project];

      return this.apiClient.callApi(
        '/project', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the showProject operation.
     * @callback module:api/ProjectApi~showProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find by ID
     * Returns a single project
     * @param {String} projectId ID of project
     * @param {module:api/ProjectApi~showProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    this.showProject = function(projectId, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling showProject");
      }


      var pathParams = {
        'projectId': projectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Project;

      return this.apiClient.callApi(
        '/project/{projectId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProject operation.
     * @callback module:api/ProjectApi~updateProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update by ID
     * Returns modified project
     * @param {String} projectId ID of project
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/ProjectApi~updateProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    this.updateProject = function(projectId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject1'];

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling updateProject");
      }


      var pathParams = {
        'projectId': projectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Project', 'ServiceAccount', 'Session'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Project;

      return this.apiClient.callApi(
        '/project/{projectId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));