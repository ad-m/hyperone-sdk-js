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
        define(['ApiClient', 'model/Disk', 'model/InlineObject19', 'model/InlineObject20', 'model/InlineObject21', 'model/InlineObject22'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/Disk'), require('../model/InlineObject19'), require('../model/InlineObject20'), require('../model/InlineObject21'), require('../model/InlineObject22'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.DiskApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Disk, root.HyperOneApi.InlineObject19, root.HyperOneApi.InlineObject20, root.HyperOneApi.InlineObject21, root.HyperOneApi.InlineObject22);
    }
}(this, function(ApiClient, Disk, InlineObject19, InlineObject20, InlineObject21, InlineObject22) {
    'use strict';

    /**
   * Disk service.
   * @module api/DiskApi
   * @version 1
   */

    /**
   * Constructs a new DiskApi.
   * @alias module:api/DiskApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;



        /**
     * Action :: resize
     * Action resize
     * @param {String} diskId ID of disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject21} opts.inlineObject21
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
        this.actionDiskResizeWithHttpInfo = function(diskId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject21;

            // verify the required parameter 'diskId' is set
            if (diskId === undefined || diskId === null) {
                throw new Error("Missing the required parameter 'diskId' when calling actionDiskResize");
            }


            const pathParams = {
                diskId: diskId,
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
            const returnType = Disk;

            return this.apiClient.callApi(
                '/disk/{diskId}/actions/resize', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: resize
     * Action resize
     * @param {String} diskId ID of disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject21} opts.inlineObject21
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
        this.actionDiskResize = function(diskId, opts) {
            return this.actionDiskResizeWithHttpInfo(diskId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Action :: transfer
     * Action transfer
     * @param {String} diskId ID of disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject22} opts.inlineObject22
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
        this.actionDiskTransferWithHttpInfo = function(diskId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject22;

            // verify the required parameter 'diskId' is set
            if (diskId === undefined || diskId === null) {
                throw new Error("Missing the required parameter 'diskId' when calling actionDiskTransfer");
            }


            const pathParams = {
                diskId: diskId,
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
            const returnType = Disk;

            return this.apiClient.callApi(
                '/disk/{diskId}/actions/transfer', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: transfer
     * Action transfer
     * @param {String} diskId ID of disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject22} opts.inlineObject22
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
        this.actionDiskTransfer = function(diskId, opts) {
            return this.actionDiskTransferWithHttpInfo(diskId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Create
     * Create disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.inlineObject19
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
        this.createDiskWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = opts.inlineObject19;


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
            const returnType = Disk;

            return this.apiClient.callApi(
                '/disk', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Create
     * Create disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject19} opts.inlineObject19
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
        this.createDisk = function(opts) {
            return this.createDiskWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Delete by ID
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
        this.deleteDiskWithHttpInfo = function(diskId) {
            const postBody = null;

            // verify the required parameter 'diskId' is set
            if (diskId === undefined || diskId === null) {
                throw new Error("Missing the required parameter 'diskId' when calling deleteDisk");
            }


            const pathParams = {
                diskId: diskId,
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
                '/disk/{diskId}', 'DELETE',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Delete by ID
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
        this.deleteDisk = function(diskId) {
            return this.deleteDiskWithHttpInfo(diskId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * List
     * List disk
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Disk>} and HTTP response
     */
        this.listDiskWithHttpInfo = function(opts) {
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
            const returnType = [Disk];

            return this.apiClient.callApi(
                '/disk', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * List
     * List disk
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Disk>}
     */
        this.listDisk = function(opts) {
            return this.listDiskWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Find by ID
     * Returns a single disk
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
        this.showDiskWithHttpInfo = function(diskId) {
            const postBody = null;

            // verify the required parameter 'diskId' is set
            if (diskId === undefined || diskId === null) {
                throw new Error("Missing the required parameter 'diskId' when calling showDisk");
            }


            const pathParams = {
                diskId: diskId,
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
            const returnType = Disk;

            return this.apiClient.callApi(
                '/disk/{diskId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Find by ID
     * Returns a single disk
     * @param {String} diskId ID of disk
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
        this.showDisk = function(diskId) {
            return this.showDiskWithHttpInfo(diskId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Update by ID
     * Returns modified disk
     * @param {String} diskId ID of disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject20} opts.inlineObject20
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Disk} and HTTP response
     */
        this.updateDiskWithHttpInfo = function(diskId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject20;

            // verify the required parameter 'diskId' is set
            if (diskId === undefined || diskId === null) {
                throw new Error("Missing the required parameter 'diskId' when calling updateDisk");
            }


            const pathParams = {
                diskId: diskId,
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
            const returnType = Disk;

            return this.apiClient.callApi(
                '/disk/{diskId}', 'PATCH',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Update by ID
     * Returns modified disk
     * @param {String} diskId ID of disk
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject20} opts.inlineObject20
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Disk}
     */
        this.updateDisk = function(diskId, opts) {
            return this.updateDiskWithHttpInfo(diskId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };
    };

    return exports;
}));
