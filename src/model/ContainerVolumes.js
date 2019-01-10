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
        root.HyperOneApi.ContainerVolumes = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The ContainerVolumes model module.
   * @module model/ContainerVolumes
   * @version 1
   */

    /**
   * Constructs a new <code>ContainerVolumes</code>.
   * @alias module:model/ContainerVolumes
   * @class
   * @param source {String}
   * @param target {String}
   */
    const exports = function(source, target) {
        const _this = this;

        _this.source = source;
        _this.target = target;
    };

    /**
   * Constructs a <code>ContainerVolumes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContainerVolumes} obj Optional instance to populate.
   * @return {module:model/ContainerVolumes} The populated <code>ContainerVolumes</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('source')) {
                obj.source = ApiClient.convertToType(data.source, 'String');
            }
            if (data.hasOwnProperty('sourcePath')) {
                obj.sourcePath = ApiClient.convertToType(data.sourcePath, 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj.target = ApiClient.convertToType(data.target, 'String');
            }
        }
        return obj;
    };

    /**
   * @member {String} source
   */
    exports.prototype.source = undefined;
    /**
   * @member {String} sourcePath
   */
    exports.prototype.sourcePath = undefined;
    /**
   * @member {String} target
   */
    exports.prototype.target = undefined;



    return exports;
}));


