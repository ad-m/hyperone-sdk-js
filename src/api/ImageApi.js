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
        define(['ApiClient', 'model/Image', 'model/InlineObject16', 'model/InlineObject17', 'model/InlineObject18'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/Image'), require('../model/InlineObject16'), require('../model/InlineObject17'), require('../model/InlineObject18'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.ImageApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Image, root.HyperOneApi.InlineObject16, root.HyperOneApi.InlineObject17, root.HyperOneApi.InlineObject18);
    }
}(this, function(ApiClient, Image, InlineObject16, InlineObject17, InlineObject18) {
    'use strict';

    /**
   * Image service.
   * @module api/ImageApi
   * @version 1
   */

    /**
   * Constructs a new ImageApi.
   * @alias module:api/ImageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;



        /**
     * Action :: transfer
     * Action transfer
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.inlineObject18
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
        this.actionImageTransferWithHttpInfo = function(imageId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject18;

            // verify the required parameter 'imageId' is set
            if (imageId === undefined || imageId === null) {
                throw new Error("Missing the required parameter 'imageId' when calling actionImageTransfer");
            }


            const pathParams = {
                imageId: imageId,
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
            const returnType = Image;

            return this.apiClient.callApi(
                '/image/{imageId}/actions/transfer', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: transfer
     * Action transfer
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject18} opts.inlineObject18
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
        this.actionImageTransfer = function(imageId, opts) {
            return this.actionImageTransferWithHttpInfo(imageId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Create
     * Create image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
        this.createImageWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = opts.inlineObject16;


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
            const returnType = Image;

            return this.apiClient.callApi(
                '/image', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Create
     * Create image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject16} opts.inlineObject16
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
        this.createImage = function(opts) {
            return this.createImageWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Delete by ID
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
        this.deleteImageWithHttpInfo = function(imageId) {
            const postBody = null;

            // verify the required parameter 'imageId' is set
            if (imageId === undefined || imageId === null) {
                throw new Error("Missing the required parameter 'imageId' when calling deleteImage");
            }


            const pathParams = {
                imageId: imageId,
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
                '/image/{imageId}', 'DELETE',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Delete by ID
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
        this.deleteImage = function(imageId) {
            return this.deleteImageWithHttpInfo(imageId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * List
     * List image
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Image>} and HTTP response
     */
        this.listImageWithHttpInfo = function(opts) {
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
            const returnType = [Image];

            return this.apiClient.callApi(
                '/image', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * List
     * List image
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Image>}
     */
        this.listImage = function(opts) {
            return this.listImageWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Find by ID
     * Returns a single image
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
        this.showImageWithHttpInfo = function(imageId) {
            const postBody = null;

            // verify the required parameter 'imageId' is set
            if (imageId === undefined || imageId === null) {
                throw new Error("Missing the required parameter 'imageId' when calling showImage");
            }


            const pathParams = {
                imageId: imageId,
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
            const returnType = Image;

            return this.apiClient.callApi(
                '/image/{imageId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Find by ID
     * Returns a single image
     * @param {String} imageId ID of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
        this.showImage = function(imageId) {
            return this.showImageWithHttpInfo(imageId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Update by ID
     * Returns modified image
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
        this.updateImageWithHttpInfo = function(imageId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject17;

            // verify the required parameter 'imageId' is set
            if (imageId === undefined || imageId === null) {
                throw new Error("Missing the required parameter 'imageId' when calling updateImage");
            }


            const pathParams = {
                imageId: imageId,
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
            const returnType = Image;

            return this.apiClient.callApi(
                '/image/{imageId}', 'PATCH',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Update by ID
     * Returns modified image
     * @param {String} imageId ID of image
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject17} opts.inlineObject17
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
        this.updateImage = function(imageId, opts) {
            return this.updateImageWithHttpInfo(imageId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };
    };

    return exports;
}));
