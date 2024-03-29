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
        define(['ApiClient', 'model/Netadp'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/Netadp'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.NetadpApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Netadp);
    }
}(this, function(ApiClient, Netadp) {
    'use strict';

    /**
   * Netadp service.
   * @module api/NetadpApi
   * @version 1
   */

    /**
   * Constructs a new NetadpApi.
   * @alias module:api/NetadpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;



        /**
     * List
     * List netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.assignedResource Filter by assigned.resource
     * @param {String} opts.assignedId Filter by assigned.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Netadp>} and HTTP response
     */
        this.listNetadpWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = null;


            const pathParams = {
            };
            const queryParams = {
                'assigned.resource': opts.assignedResource,
                'assigned.id': opts.assignedId,
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
            const returnType = [Netadp];

            return this.apiClient.callApi(
                '/netadp', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * List
     * List netadp
     * @param {Object} opts Optional parameters
     * @param {String} opts.assignedResource Filter by assigned.resource
     * @param {String} opts.assignedId Filter by assigned.id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Netadp>}
     */
        this.listNetadp = function(opts) {
            return this.listNetadpWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Find by ID
     * Returns a single netadp
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Netadp} and HTTP response
     */
        this.showNetadpWithHttpInfo = function(netadpId) {
            const postBody = null;

            // verify the required parameter 'netadpId' is set
            if (netadpId === undefined || netadpId === null) {
                throw new Error("Missing the required parameter 'netadpId' when calling showNetadp");
            }


            const pathParams = {
                netadpId: netadpId,
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
            const returnType = Netadp;

            return this.apiClient.callApi(
                '/netadp/{netadpId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Find by ID
     * Returns a single netadp
     * @param {String} netadpId ID of netadp
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Netadp}
     */
        this.showNetadp = function(netadpId) {
            return this.showNetadpWithHttpInfo(netadpId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };
    };

    return exports;
}));
