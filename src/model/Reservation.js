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
        root.HyperOneApi.Reservation = factory(root.HyperOneApi.ApiClient);
    }
}(this, function(ApiClient) {
    'use strict';



    /**
   * The Reservation model module.
   * @module model/Reservation
   * @version 1
   */

    /**
   * Constructs a new <code>Reservation</code>.
   * @alias module:model/Reservation
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>Reservation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reservation} obj Optional instance to populate.
   * @return {module:model/Reservation} The populated <code>Reservation</code> instance.
   */
    exports.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new exports();
            if (data.hasOwnProperty('_id')) {
                obj._id = ApiClient.convertToType(data._id, 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String');
            }
            if (data.hasOwnProperty('services')) {
                obj.services = ApiClient.convertToType(data.services, 'String');
            }
            if (data.hasOwnProperty('flavour')) {
                obj.flavour = ApiClient.convertToType(data.flavour, 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj.modifiedOn = ApiClient.convertToType(data.modifiedOn, 'String');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj.modifiedBy = ApiClient.convertToType(data.modifiedBy, 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj.createdBy = ApiClient.convertToType(data.createdBy, 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj.createdOn = ApiClient.convertToType(data.createdOn, 'String');
            }
            if (data.hasOwnProperty('accessRights')) {
                obj.accessRights = ApiClient.convertToType(data.accessRights, 'String');
            }
            if (data.hasOwnProperty('processing')) {
                obj.processing = ApiClient.convertToType(data.processing, 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj.created = ApiClient.convertToType(data.created, 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj.queue = ApiClient.convertToType(data.queue, 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj.state = ApiClient.convertToType(data.state, 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj.tag = ApiClient.convertToType(data.tag, 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj.project = ApiClient.convertToType(data.project, 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj.resource = ApiClient.convertToType(data.resource, 'String');
            }
            if (data.hasOwnProperty('assigned')) {
                obj.assigned = ApiClient.convertToType(data.assigned, 'String');
            }
            if (data.hasOwnProperty('sourceService')) {
                obj.sourceService = ApiClient.convertToType(data.sourceService, 'String');
            }
        }
        return obj;
    };

    /**
   * @member {String} _id
   */
    exports.prototype._id = undefined;
    /**
   * @member {String} name
   */
    exports.prototype.name = undefined;
    /**
   * @member {String} services
   */
    exports.prototype.services = undefined;
    /**
   * @member {String} flavour
   */
    exports.prototype.flavour = undefined;
    /**
   * @member {String} modifiedOn
   */
    exports.prototype.modifiedOn = undefined;
    /**
   * @member {String} modifiedBy
   */
    exports.prototype.modifiedBy = undefined;
    /**
   * @member {String} createdBy
   */
    exports.prototype.createdBy = undefined;
    /**
   * @member {String} createdOn
   */
    exports.prototype.createdOn = undefined;
    /**
   * @member {String} accessRights
   */
    exports.prototype.accessRights = undefined;
    /**
   * @member {String} processing
   */
    exports.prototype.processing = undefined;
    /**
   * @member {String} created
   */
    exports.prototype.created = undefined;
    /**
   * @member {String} queue
   */
    exports.prototype.queue = undefined;
    /**
   * @member {String} state
   */
    exports.prototype.state = undefined;
    /**
   * @member {String} tag
   */
    exports.prototype.tag = undefined;
    /**
   * @member {String} project
   */
    exports.prototype.project = undefined;
    /**
   * @member {String} resource
   */
    exports.prototype.resource = undefined;
    /**
   * @member {String} assigned
   */
    exports.prototype.assigned = undefined;
    /**
   * @member {String} sourceService
   */
    exports.prototype.sourceService = undefined;



    return exports;
}));


