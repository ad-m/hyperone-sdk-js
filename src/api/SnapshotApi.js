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
        define(['ApiClient', 'model/InlineObject41', 'model/InlineObject42', 'model/Snapshot'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/InlineObject41'), require('../model/InlineObject42'), require('../model/Snapshot'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.SnapshotApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.InlineObject41, root.HyperOneApi.InlineObject42, root.HyperOneApi.Snapshot);
    }
}(this, function(ApiClient, InlineObject41, InlineObject42, Snapshot) {
    'use strict';

    /**
   * Snapshot service.
   * @module api/SnapshotApi
   * @version 1
   */

    /**
   * Constructs a new SnapshotApi.
   * @alias module:api/SnapshotApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;


        /**
     * Callback function to receive the result of the createSnapshot operation.
     * @callback module:api/SnapshotApi~createSnapshotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

        /**
     * Create
     * Create snapshot
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject41} opts.inlineObject41
     * @param {module:api/SnapshotApi~createSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snapshot}
     */
        this.createSnapshot = function(opts, callback) {
            opts = opts || {};
            const postBody = opts.inlineObject41;


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
            const returnType = Snapshot;

            return this.apiClient.callApi(
                '/snapshot', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType, callback
            );
        };

        /**
     * Callback function to receive the result of the deleteSnapshot operation.
     * @callback module:api/SnapshotApi~deleteSnapshotCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

        /**
     * Delete by ID
     * @param {String} snapshotId ID of snapshot
     * @param {module:api/SnapshotApi~deleteSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     */
        this.deleteSnapshot = function(snapshotId, callback) {
            const postBody = null;

            // verify the required parameter 'snapshotId' is set
            if (snapshotId === undefined || snapshotId === null) {
                throw new Error("Missing the required parameter 'snapshotId' when calling deleteSnapshot");
            }


            const pathParams = {
                snapshotId: snapshotId,
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
            const accepts = [];
            const returnType = null;

            return this.apiClient.callApi(
                '/snapshot/{snapshotId}', 'DELETE',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType, callback
            );
        };

        /**
     * Callback function to receive the result of the listSnapshot operation.
     * @callback module:api/SnapshotApi~listSnapshotCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Snapshot>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

        /**
     * List
     * List snapshot
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {String} opts.vault Filter by vault
     * @param {module:api/SnapshotApi~listSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Snapshot>}
     */
        this.listSnapshot = function(opts, callback) {
            opts = opts || {};
            const postBody = null;


            const pathParams = {
            };
            const queryParams = {
                name: opts.name,
                vault: opts.vault,
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
            const returnType = [Snapshot];

            return this.apiClient.callApi(
                '/snapshot', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType, callback
            );
        };

        /**
     * Callback function to receive the result of the showSnapshot operation.
     * @callback module:api/SnapshotApi~showSnapshotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

        /**
     * Find by ID
     * Returns a single snapshot
     * @param {String} snapshotId ID of snapshot
     * @param {module:api/SnapshotApi~showSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snapshot}
     */
        this.showSnapshot = function(snapshotId, callback) {
            const postBody = null;

            // verify the required parameter 'snapshotId' is set
            if (snapshotId === undefined || snapshotId === null) {
                throw new Error("Missing the required parameter 'snapshotId' when calling showSnapshot");
            }


            const pathParams = {
                snapshotId: snapshotId,
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
            const returnType = Snapshot;

            return this.apiClient.callApi(
                '/snapshot/{snapshotId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType, callback
            );
        };

        /**
     * Callback function to receive the result of the updateSnapshot operation.
     * @callback module:api/SnapshotApi~updateSnapshotCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snapshot} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

        /**
     * Update by ID
     * Returns modified snapshot
     * @param {String} snapshotId ID of snapshot
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject42} opts.inlineObject42
     * @param {module:api/SnapshotApi~updateSnapshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snapshot}
     */
        this.updateSnapshot = function(snapshotId, opts, callback) {
            opts = opts || {};
            const postBody = opts.inlineObject42;

            // verify the required parameter 'snapshotId' is set
            if (snapshotId === undefined || snapshotId === null) {
                throw new Error("Missing the required parameter 'snapshotId' when calling updateSnapshot");
            }


            const pathParams = {
                snapshotId: snapshotId,
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
            const returnType = Snapshot;

            return this.apiClient.callApi(
                '/snapshot/{snapshotId}', 'PATCH',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType, callback
            );
        };
    };

    return exports;
}));
