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
        define(['ApiClient', 'model/InlineObject43', 'model/InlineObject44', 'model/InlineObject45', 'model/Reservation'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('../model/InlineObject43'), require('../model/InlineObject44'), require('../model/InlineObject45'), require('../model/Reservation'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.ReservationApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.InlineObject43, root.HyperOneApi.InlineObject44, root.HyperOneApi.InlineObject45, root.HyperOneApi.Reservation);
    }
}(this, function(ApiClient, InlineObject43, InlineObject44, InlineObject45, Reservation) {
    'use strict';

    /**
   * Reservation service.
   * @module api/ReservationApi
   * @version 1
   */

    /**
   * Constructs a new ReservationApi.
   * @alias module:api/ReservationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;



        /**
     * Action :: assign
     * Action assign
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject45} opts.inlineObject45
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Reservation} and HTTP response
     */
        this.actionReservationAssignWithHttpInfo = function(reservationId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject45;

            // verify the required parameter 'reservationId' is set
            if (reservationId === undefined || reservationId === null) {
                throw new Error("Missing the required parameter 'reservationId' when calling actionReservationAssign");
            }


            const pathParams = {
                reservationId: reservationId,
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
            const returnType = Reservation;

            return this.apiClient.callApi(
                '/reservation/{reservationId}/actions/assign', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: assign
     * Action assign
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject45} opts.inlineObject45
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Reservation}
     */
        this.actionReservationAssign = function(reservationId, opts) {
            return this.actionReservationAssignWithHttpInfo(reservationId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Action :: extend
     * Action extend
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Reservation} and HTTP response
     */
        this.actionReservationExtendWithHttpInfo = function(reservationId, opts) {
            opts = opts || {};
            const postBody = opts.body;

            // verify the required parameter 'reservationId' is set
            if (reservationId === undefined || reservationId === null) {
                throw new Error("Missing the required parameter 'reservationId' when calling actionReservationExtend");
            }


            const pathParams = {
                reservationId: reservationId,
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
            const returnType = Reservation;

            return this.apiClient.callApi(
                '/reservation/{reservationId}/actions/extend', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: extend
     * Action extend
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Reservation}
     */
        this.actionReservationExtend = function(reservationId, opts) {
            return this.actionReservationExtendWithHttpInfo(reservationId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Action :: unassign
     * Action unassign
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Reservation} and HTTP response
     */
        this.actionReservationUnassignWithHttpInfo = function(reservationId, opts) {
            opts = opts || {};
            const postBody = opts.body;

            // verify the required parameter 'reservationId' is set
            if (reservationId === undefined || reservationId === null) {
                throw new Error("Missing the required parameter 'reservationId' when calling actionReservationUnassign");
            }


            const pathParams = {
                reservationId: reservationId,
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
            const returnType = Reservation;

            return this.apiClient.callApi(
                '/reservation/{reservationId}/actions/unassign', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Action :: unassign
     * Action unassign
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Reservation}
     */
        this.actionReservationUnassign = function(reservationId, opts) {
            return this.actionReservationUnassignWithHttpInfo(reservationId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Create
     * Create reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject43} opts.inlineObject43
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Reservation} and HTTP response
     */
        this.createReservationWithHttpInfo = function(opts) {
            opts = opts || {};
            const postBody = opts.inlineObject43;


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
            const returnType = Reservation;

            return this.apiClient.callApi(
                '/reservation', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Create
     * Create reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject43} opts.inlineObject43
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Reservation}
     */
        this.createReservation = function(opts) {
            return this.createReservationWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Delete by ID
     * @param {String} reservationId ID of reservation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
        this.deleteReservationWithHttpInfo = function(reservationId) {
            const postBody = null;

            // verify the required parameter 'reservationId' is set
            if (reservationId === undefined || reservationId === null) {
                throw new Error("Missing the required parameter 'reservationId' when calling deleteReservation");
            }


            const pathParams = {
                reservationId: reservationId,
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
                '/reservation/{reservationId}', 'DELETE',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Delete by ID
     * @param {String} reservationId ID of reservation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
        this.deleteReservation = function(reservationId) {
            return this.deleteReservationWithHttpInfo(reservationId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * List
     * List reservation
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Reservation>} and HTTP response
     */
        this.listReservationWithHttpInfo = function(opts) {
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
            const returnType = [Reservation];

            return this.apiClient.callApi(
                '/reservation', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * List
     * List reservation
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Reservation>}
     */
        this.listReservation = function(opts) {
            return this.listReservationWithHttpInfo(opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Find by ID
     * Returns a single reservation
     * @param {String} reservationId ID of reservation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Reservation} and HTTP response
     */
        this.showReservationWithHttpInfo = function(reservationId) {
            const postBody = null;

            // verify the required parameter 'reservationId' is set
            if (reservationId === undefined || reservationId === null) {
                throw new Error("Missing the required parameter 'reservationId' when calling showReservation");
            }


            const pathParams = {
                reservationId: reservationId,
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
            const returnType = Reservation;

            return this.apiClient.callApi(
                '/reservation/{reservationId}', 'GET',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Find by ID
     * Returns a single reservation
     * @param {String} reservationId ID of reservation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Reservation}
     */
        this.showReservation = function(reservationId) {
            return this.showReservationWithHttpInfo(reservationId)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };


        /**
     * Update by ID
     * Returns modified reservation
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject44} opts.inlineObject44
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Reservation} and HTTP response
     */
        this.updateReservationWithHttpInfo = function(reservationId, opts) {
            opts = opts || {};
            const postBody = opts.inlineObject44;

            // verify the required parameter 'reservationId' is set
            if (reservationId === undefined || reservationId === null) {
                throw new Error("Missing the required parameter 'reservationId' when calling updateReservation");
            }


            const pathParams = {
                reservationId: reservationId,
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
            const returnType = Reservation;

            return this.apiClient.callApi(
                '/reservation/{reservationId}', 'PATCH',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, returnType
            );
        };

        /**
     * Update by ID
     * Returns modified reservation
     * @param {String} reservationId ID of reservation
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject44} opts.inlineObject44
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Reservation}
     */
        this.updateReservation = function(reservationId, opts) {
            return this.updateReservationWithHttpInfo(reservationId, opts)
                .then(function(response_and_data) {
                    return response_and_data.data;
                });
        };
    };

    return exports;
}));
