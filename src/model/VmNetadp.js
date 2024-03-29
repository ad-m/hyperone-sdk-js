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
        root.HyperOneApi.VmNetadp = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The VmNetadp model module.
   * @module model/VmNetadp
   * @version 1
   */

    /**
   * Constructs a new <code>VmNetadp</code>.
   * @alias module:model/VmNetadp
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>VmNetadp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VmNetadp} obj Optional instance to populate.
   * @return {module:model/VmNetadp} The populated <code>VmNetadp</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('service')) {
                obj.service = ApiClient.convertToType(data.service, 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj.network = ApiClient.convertToType(data.network, 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj.ip = ApiClient.convertToType(data.ip, ['String']);
            }
        }
        return obj;
    };

    /**
   * @member {String} service
   */
    exports.prototype.service = undefined;
    /**
   * @member {String} network
   */
    exports.prototype.network = undefined;
    /**
   * @member {Array.<String>} ip
   */
    exports.prototype.ip = undefined;



    return exports;
}));


