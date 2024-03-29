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
        define(['ApiClient', 'model/InlineObject46', 'model/InlineObject47', 'model/InlineObject48', 'model/LogArchive'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/InlineObject46'), require('../model/InlineObject47'), require('../model/InlineObject48'), require('../model/LogArchive'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.LogArchiveApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.InlineObject46, root.HyperOneApi.InlineObject47, root.HyperOneApi.InlineObject48, root.HyperOneApi.LogArchive);
    }
}(this, function(ApiClient, InlineObject46, InlineObject47, InlineObject48, LogArchive) {
    'use strict';

    /**
   * LogArchive service.
   * @module api/LogArchiveApi
   * @version 1
   */

    /**
   * Constructs a new LogArchiveApi.
   * @alias module:api/LogArchiveApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;



        /**
     * Action :: transfer
     * Action transfer
     * @param {String} logArchiveId ID of logArchive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject48} opts.inlineObject48
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogArchive} and HTTP response
     */
        this.actionLogArchiveTransferWithHttpInfo = function(logArchiveId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject48;

            // verify the required parameter 'logArchiveId' is set
            if (logArchiveId === undefined || logArchiveId === null) {
                throw new Error("Missing the required parameter 'logArchiveId' when calling actionLogArchiveTransfer");
            }


            const pathParams = {
                logArchiveId: logArchiveId,
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
            const returnType = LogArchive;

            return this.apiClient.callApi(
                '/logArchive/{logArchiveId}/actions/transfer', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: transfer
     * Action transfer
     * @param {String} logArchiveId ID of logArchive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject48} opts.inlineObject48
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogArchive}
     */
        this.actionLogArchiveTransfer = function(logArchiveId, opts) {
            return this.actionLogArchiveTransferWithHttpInfo(logArchiveId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Create
     * Create logArchive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject46} opts.inlineObject46
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogArchive} and HTTP response
     */
        this.createLogArchiveWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = opts.inlineObject46;


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
            const returnType = LogArchive;

            return this.apiClient.callApi(
                '/logArchive', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Create
     * Create logArchive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject46} opts.inlineObject46
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogArchive}
     */
        this.createLogArchive = function(opts) {
            return this.createLogArchiveWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Delete by ID
     * @param {String} logArchiveId ID of logArchive
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
        this.deleteLogArchiveWithHttpInfo = function(logArchiveId) {
            const postBody = null;

            // verify the required parameter 'logArchiveId' is set
            if (logArchiveId === undefined || logArchiveId === null) {
                throw new Error("Missing the required parameter 'logArchiveId' when calling deleteLogArchive");
            }


            const pathParams = {
                logArchiveId: logArchiveId,
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
                '/logArchive/{logArchiveId}', 'DELETE',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Delete by ID
     * @param {String} logArchiveId ID of logArchive
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
        this.deleteLogArchive = function(logArchiveId) {
            return this.deleteLogArchiveWithHttpInfo(logArchiveId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * List
     * List logArchive
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LogArchive>} and HTTP response
     */
        this.listLogArchiveWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = null;


            const pathParams = {
            };
            const queryParams = {
                name: opts.name,
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
            const returnType = [LogArchive];

            return this.apiClient.callApi(
                '/logArchive', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * List
     * List logArchive
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LogArchive>}
     */
        this.listLogArchive = function(opts) {
            return this.listLogArchiveWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Find by ID
     * Returns a single logArchive
     * @param {String} logArchiveId ID of logArchive
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogArchive} and HTTP response
     */
        this.showLogArchiveWithHttpInfo = function(logArchiveId) {
            const postBody = null;

            // verify the required parameter 'logArchiveId' is set
            if (logArchiveId === undefined || logArchiveId === null) {
                throw new Error("Missing the required parameter 'logArchiveId' when calling showLogArchive");
            }


            const pathParams = {
                logArchiveId: logArchiveId,
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
            const returnType = LogArchive;

            return this.apiClient.callApi(
                '/logArchive/{logArchiveId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Find by ID
     * Returns a single logArchive
     * @param {String} logArchiveId ID of logArchive
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogArchive}
     */
        this.showLogArchive = function(logArchiveId) {
            return this.showLogArchiveWithHttpInfo(logArchiveId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Update by ID
     * Returns modified logArchive
     * @param {String} logArchiveId ID of logArchive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject47} opts.inlineObject47
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LogArchive} and HTTP response
     */
        this.updateLogArchiveWithHttpInfo = function(logArchiveId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject47;

            // verify the required parameter 'logArchiveId' is set
            if (logArchiveId === undefined || logArchiveId === null) {
                throw new Error("Missing the required parameter 'logArchiveId' when calling updateLogArchive");
            }


            const pathParams = {
                logArchiveId: logArchiveId,
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
            const returnType = LogArchive;

            return this.apiClient.callApi(
                '/logArchive/{logArchiveId}', 'PATCH',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Update by ID
     * Returns modified logArchive
     * @param {String} logArchiveId ID of logArchive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject47} opts.inlineObject47
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LogArchive}
     */
        this.updateLogArchive = function(logArchiveId, opts) {
            return this.updateLogArchiveWithHttpInfo(logArchiveId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };
    };

    return exports;
}));
