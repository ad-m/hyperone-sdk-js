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
        root.HyperOneApi.DiskMetadataSource = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The DiskMetadataSource model module.
   * @module model/DiskMetadataSource
   * @version 1
   */

    /**
   * Constructs a new <code>DiskMetadataSource</code>.
   * @alias module:model/DiskMetadataSource
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>DiskMetadataSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiskMetadataSource} obj Optional instance to populate.
   * @return {module:model/DiskMetadataSource} The populated <code>DiskMetadataSource</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('filename')) {
                obj.filename = ApiClient.convertToType(data.filename, 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj.size = ApiClient.convertToType(data.size, 'Number');
            }
        }
        return obj;
    };

    /**
   * @member {String} filename
   */
    exports.prototype.filename = undefined;
    /**
   * @member {Number} size
   */
    exports.prototype.size = undefined;



    return exports;
}));


