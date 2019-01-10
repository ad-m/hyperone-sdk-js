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
        root.HyperOneApi.ContainerExpose = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The ContainerExpose model module.
   * @module model/ContainerExpose
   * @version 1
   */

    /**
   * Constructs a new <code>ContainerExpose</code>.
   * @alias module:model/ContainerExpose
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>ContainerExpose</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContainerExpose} obj Optional instance to populate.
   * @return {module:model/ContainerExpose} The populated <code>ContainerExpose</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('port')) {
                obj.port = ApiClient.convertToType(data.port, 'Number');
            }
            if (data.hasOwnProperty('host')) {
                obj.host = ApiClient.convertToType(data.host, 'String');
            }
        }
        return obj;
    };

    /**
   * @member {Number} port
   */
    exports.prototype.port = undefined;
    /**
   * @member {String} host
   */
    exports.prototype.host = undefined;



    return exports;
}));


