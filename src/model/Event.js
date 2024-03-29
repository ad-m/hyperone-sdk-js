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
        define(['ApiClient', 'model/EventResource'], factory);
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'), require('./EventResource'));
    } else {
    // Browser globals (root is window)
        if (!root.HyperOneApi) {
            root.HyperOneApi = {};
        }
        root.HyperOneApi.Event = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.EventResource);
    }
}(this, function(ApiClient, EventResource) {
    'use strict';



    /**
   * The Event model module.
   * @module model/Event
   * @version 1
   */

    /**
   * Constructs a new <code>Event</code>.
   * @alias module:model/Event
   * @class
   */
    const exports = function() {
        const _this = this;

    };

    /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
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
            if (data.hasOwnProperty('createdBy')) {
                obj.createdBy = ApiClient.convertToType(data.createdBy, 'String');
            }
            if (data.hasOwnProperty('queued')) {
                obj.queued = ApiClient.convertToType(data.queued, 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj.state = ApiClient.convertToType(data.state, 'String');
            }
            if (data.hasOwnProperty('stage')) {
                obj.stage = ApiClient.convertToType(data.stage, 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj.resource = EventResource.constructFromObject(data.resource);
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
   * @member {String} createdBy
   */
    exports.prototype.createdBy = undefined;
    /**
   * @member {Date} queued
   */
    exports.prototype.queued = undefined;
    /**
   * @member {module:model/Event.StateEnum} state
   */
    exports.prototype.state = undefined;
    /**
   * @member {String} stage
   */
    exports.prototype.stage = undefined;
    /**
   * @member {module:model/EventResource} resource
   */
    exports.prototype.resource = undefined;


    /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
    exports.StateEnum = {
    /**
     * value: "pending"
     * @const
     */
        pending: 'pending',
        /**
     * value: "processing"
     * @const
     */
        processing: 'processing',
        /**
     * value: "finished"
     * @const
     */
        finished: 'finished',
        /**
     * value: "error"
     * @const
     */
        error: 'error'  };


    return exports;
}));


