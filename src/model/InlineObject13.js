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
        define(['ApiClient', 'model/NetgwPublic'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('./NetgwPublic'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.InlineObject13 = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.NetgwPublic);
    }
}(this, function(ApiClient, NetgwPublic) {
    'use strict';



    /**
   * The InlineObject13 model module.
   * @module model/InlineObject13
   * @version 1
   */

    /**
   * Constructs a new <code>InlineObject13</code>.
   * @alias module:model/InlineObject13
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>InlineObject13</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject13} obj Optional instance to populate.
   * @return {module:model/InlineObject13} The populated <code>InlineObject13</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj.public = NetgwPublic.constructFromObject(data.public);
            }
            if (data.hasOwnProperty('tag')) {
                obj.tag = ApiClient.convertToType(data.tag, Object);
            }
        }
        return obj;
    };

    /**
   * @member {String} name
   */
    exports.prototype.name = undefined;
    /**
   * @member {module:model/NetgwPublic} public
   */
    exports.prototype.public = undefined;
    /**
   * @member {Object} tag
   */
    exports.prototype.tag = undefined;



    return exports;
}));


