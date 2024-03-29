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
        define(['ApiClient', 'model/VaultCredential'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('./VaultCredential'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.InlineObject37 = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.VaultCredential);
    }
}(this, function(ApiClient, VaultCredential) {
    'use strict';



    /**
   * The InlineObject37 model module.
   * @module model/InlineObject37
   * @version 1
   */

    /**
   * Constructs a new <code>InlineObject37</code>.
   * @alias module:model/InlineObject37
   * @class
   * @param name {String}
   * @param size {Number}
   * @param service {String}
   */
    const exports = function(name, size, service) {
        const _this = this;

        _this.name = name;
        _this.size = size;
        _this.service = service;
    };

    /**
   * Constructs a <code>InlineObject37</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineObject37} obj Optional instance to populate.
   * @return {module:model/InlineObject37} The populated <code>InlineObject37</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj.size = ApiClient.convertToType(data.size, 'Number');
            }
            if (data.hasOwnProperty('service')) {
                obj.service = ApiClient.convertToType(data.service, 'String');
            }
            if (data.hasOwnProperty('credential')) {
                obj.credential = VaultCredential.constructFromObject(data.credential);
            }
            if (data.hasOwnProperty('snapshot')) {
                obj.snapshot = ApiClient.convertToType(data.snapshot, 'String');
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
   * @member {Number} size
   */
    exports.prototype.size = undefined;
    /**
   * @member {String} service
   */
    exports.prototype.service = undefined;
    /**
   * @member {module:model/VaultCredential} credential
   */
    exports.prototype.credential = undefined;
    /**
   * @member {String} snapshot
   */
    exports.prototype.snapshot = undefined;
    /**
   * @member {Object} tag
   */
    exports.prototype.tag = undefined;



    return exports;
}));


