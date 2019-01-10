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
    define(['ApiClient', 'model/Firewall', 'model/InlineObject10', 'model/InlineObject7', 'model/InlineObject8', 'model/InlineObject9'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Firewall'), require('../model/InlineObject10'), require('../model/InlineObject7'), require('../model/InlineObject8'), require('../model/InlineObject9'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.FirewallApi = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.Firewall, root.HyperOneApi.InlineObject10, root.HyperOneApi.InlineObject7, root.HyperOneApi.InlineObject8, root.HyperOneApi.InlineObject9);
  }
}(this, function(ApiClient, Firewall, InlineObject10, InlineObject7, InlineObject8, InlineObject9) {
  'use strict';

  /**
   * Firewall service.
   * @module api/FirewallApi
   * @version 1
   */

  /**
   * Constructs a new FirewallApi. 
   * @alias module:api/FirewallApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the actionFirewallAttach operation.
     * @callback module:api/FirewallApi~actionFirewallAttachCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Firewall} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Action :: attach
     * Action attach
     * @param {String} firewallId ID of firewall
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject9} opts.inlineObject9 
     * @param {module:api/FirewallApi~actionFirewallAttachCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Firewall}
     */
    this.actionFirewallAttach = function(firewallId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject9'];

      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling actionFirewallAttach");
      }


      var pathParams = {
        'firewallId': firewallId
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
      var returnType = Firewall;

      return this.apiClient.callApi(
        '/firewall/{firewallId}/actions/attach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionFirewallDetach operation.
     * @callback module:api/FirewallApi~actionFirewallDetachCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Firewall} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Action :: detach
     * Action detach
     * @param {String} firewallId ID of firewall
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {module:api/FirewallApi~actionFirewallDetachCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Firewall}
     */
    this.actionFirewallDetach = function(firewallId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling actionFirewallDetach");
      }


      var pathParams = {
        'firewallId': firewallId
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
      var returnType = Firewall;

      return this.apiClient.callApi(
        '/firewall/{firewallId}/actions/detach', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionFirewallTransfer operation.
     * @callback module:api/FirewallApi~actionFirewallTransferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Firewall} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Action :: transfer
     * Action transfer
     * @param {String} firewallId ID of firewall
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject10} opts.inlineObject10 
     * @param {module:api/FirewallApi~actionFirewallTransferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Firewall}
     */
    this.actionFirewallTransfer = function(firewallId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject10'];

      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling actionFirewallTransfer");
      }


      var pathParams = {
        'firewallId': firewallId
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
      var returnType = Firewall;

      return this.apiClient.callApi(
        '/firewall/{firewallId}/actions/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createFirewall operation.
     * @callback module:api/FirewallApi~createFirewallCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Firewall} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create
     * Create firewall
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject7} opts.inlineObject7 
     * @param {module:api/FirewallApi~createFirewallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Firewall}
     */
    this.createFirewall = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject7'];


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
      var returnType = Firewall;

      return this.apiClient.callApi(
        '/firewall', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFirewall operation.
     * @callback module:api/FirewallApi~deleteFirewallCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete by ID
     * @param {String} firewallId ID of firewall
     * @param {module:api/FirewallApi~deleteFirewallCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteFirewall = function(firewallId, callback) {
      var postBody = null;

      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling deleteFirewall");
      }


      var pathParams = {
        'firewallId': firewallId
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
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/firewall/{firewallId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listFirewall operation.
     * @callback module:api/FirewallApi~listFirewallCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Firewall>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List
     * List firewall
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Filter by name
     * @param {module:api/FirewallApi~listFirewallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Firewall>}
     */
    this.listFirewall = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
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
      var returnType = [Firewall];

      return this.apiClient.callApi(
        '/firewall', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the showFirewall operation.
     * @callback module:api/FirewallApi~showFirewallCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Firewall} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find by ID
     * Returns a single firewall
     * @param {String} firewallId ID of firewall
     * @param {module:api/FirewallApi~showFirewallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Firewall}
     */
    this.showFirewall = function(firewallId, callback) {
      var postBody = null;

      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling showFirewall");
      }


      var pathParams = {
        'firewallId': firewallId
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
      var returnType = Firewall;

      return this.apiClient.callApi(
        '/firewall/{firewallId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFirewall operation.
     * @callback module:api/FirewallApi~updateFirewallCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Firewall} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update by ID
     * Returns modified firewall
     * @param {String} firewallId ID of firewall
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject8} opts.inlineObject8 
     * @param {module:api/FirewallApi~updateFirewallCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Firewall}
     */
    this.updateFirewall = function(firewallId, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject8'];

      // verify the required parameter 'firewallId' is set
      if (firewallId === undefined || firewallId === null) {
        throw new Error("Missing the required parameter 'firewallId' when calling updateFirewall");
      }


      var pathParams = {
        'firewallId': firewallId
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
      var returnType = Firewall;

      return this.apiClient.callApi(
        '/firewall/{firewallId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));