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
        define(['ApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.NetworkDns = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The NetworkDns model module.
   * @module model/NetworkDns
   * @version 1
   */

    /**
   * Constructs a new <code>NetworkDns</code>.
   * @alias module:model/NetworkDns
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>NetworkDns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkDns} obj Optional instance to populate.
   * @return {module:model/NetworkDns} The populated <code>NetworkDns</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('nameservers')) {
                obj.nameservers = ApiClient.convertToType(data.nameservers, ['String']);
            }
        }
        return obj;
    };

    /**
   * @member {Array.<String>} nameservers
   */
    exports.prototype.nameservers = undefined;



    return exports;
}));


