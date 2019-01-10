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
        define(['ApiClient', 'model/ProjectThresholdCredits'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('./ProjectThresholdCredits'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.ProjectThreshold = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ProjectThresholdCredits);
    }
}(this, function(ApiClient, ProjectThresholdCredits) {
    'use strict';



    /**
   * The ProjectThreshold model module.
   * @module model/ProjectThreshold
   * @version 1
   */

    /**
   * Constructs a new <code>ProjectThreshold</code>.
   * @alias module:model/ProjectThreshold
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>ProjectThreshold</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectThreshold} obj Optional instance to populate.
   * @return {module:model/ProjectThreshold} The populated <code>ProjectThreshold</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('credits')) {
                obj.credits = ProjectThresholdCredits.constructFromObject(data.credits);
            }
        }
        return obj;
    };

    /**
   * @member {module:model/ProjectThresholdCredits} credits
   */
    exports.prototype.credits = undefined;



    return exports;
}));


