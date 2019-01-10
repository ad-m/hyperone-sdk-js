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
        root.HyperOneApi.ProjectAccessRights = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The ProjectAccessRights model module.
   * @module model/ProjectAccessRights
   * @version 1
   */

    /**
   * Constructs a new <code>ProjectAccessRights</code>.
   * @alias module:model/ProjectAccessRights
   * @class
   * @param id {String}
   * @param role {String}
   */
    const exports = function(id, role) {
        const _this = this;

        _this.id = id;
        _this.role = role;
    };

    /**
   * Constructs a <code>ProjectAccessRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectAccessRights} obj Optional instance to populate.
   * @return {module:model/ProjectAccessRights} The populated <code>ProjectAccessRights</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('id')) {
                obj.id = ApiClient.convertToType(data.id, 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj.role = ApiClient.convertToType(data.role, 'String');
            }
        }
        return obj;
    };

    /**
   * @member {String} id
   */
    exports.prototype.id = undefined;
    /**
   * @member {String} role
   */
    exports.prototype.role = undefined;



    return exports;
}));


