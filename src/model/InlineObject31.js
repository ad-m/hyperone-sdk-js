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
        root.HyperOneApi.InlineObject31 = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The InlineObject31 model module.
   * @module model/InlineObject31
   * @version 1
   */

    /**
   * Constructs a new <code>InlineObject31</code>.
   * @alias module:model/InlineObject31
   * @class
   * @param service {String}
   */
    const exports = function(service) {
        const _this = this;

        _this.service = service;
    };

    /**
   * Constructs a <code>InlineObject31</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject31} obj Optional instance to populate.
   * @return {module:model/InlineObject31} The populated <code>InlineObject31</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('service')) {
                obj.service = ApiClient.convertToType(data.service, 'String');
            }
        }
        return obj;
    };

    /**
   * @member {String} service
   */
    exports.prototype.service = undefined;



    return exports;
}));


