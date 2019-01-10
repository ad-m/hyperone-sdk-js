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
        root.HyperOneApi.InlineObject32 = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The InlineObject32 model module.
   * @module model/InlineObject32
   * @version 1
   */

    /**
   * Constructs a new <code>InlineObject32</code>.
   * @alias module:model/InlineObject32
   * @class
   * @param service {String}
   */
    const exports = function(service) {
        const _this = this;

        _this.service = service;
    };

    /**
   * Constructs a <code>InlineObject32</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject32} obj Optional instance to populate.
   * @return {module:model/InlineObject32} The populated <code>InlineObject32</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('service')) {
                obj.service = ApiClient.convertToType(data.service, 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj.tag = ApiClient.convertToType(data.tag, Object);
            }
        }
        return obj;
    };

    /**
   * @member {String} service
   */
    exports.prototype.service = undefined;
    /**
   * @member {Object} tag
   */
    exports.prototype.tag = undefined;



    return exports;
}));


