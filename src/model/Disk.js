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
    define(['ApiClient', 'model/ContainerServices', 'model/DiskMetadata1', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContainerServices'), require('./DiskMetadata1'), require('./Event'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.Disk = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.ContainerServices, root.HyperOneApi.DiskMetadata1, root.HyperOneApi.Event);
  }
}(this, function(ApiClient, ContainerServices, DiskMetadata1, Event) {
  'use strict';



  /**
   * The Disk model module.
   * @module model/Disk
   * @version 1
   */

  /**
   * Constructs a new <code>Disk</code>.
   * @alias module:model/Disk
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Disk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Disk} obj Optional instance to populate.
   * @return {module:model/Disk} The populated <code>Disk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], [ContainerServices]);
      }
      if (data.hasOwnProperty('flavour')) {
        obj['flavour'] = ApiClient.convertToType(data['flavour'], 'String');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
      }
      if (data.hasOwnProperty('accessRights')) {
        obj['accessRights'] = ApiClient.convertToType(data['accessRights'], ['String']);
      }
      if (data.hasOwnProperty('processing')) {
        obj['processing'] = ApiClient.convertToType(data['processing'], 'Boolean');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Boolean');
      }
      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], [Event]);
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], Object);
      }
      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('vm')) {
        obj['vm'] = ApiClient.convertToType(data['vm'], 'String');
      }
      if (data.hasOwnProperty('persistent')) {
        obj['persistent'] = ApiClient.convertToType(data['persistent'], 'String');
      }
      if (data.hasOwnProperty('downloadUrl')) {
        obj['downloadUrl'] = ApiClient.convertToType(data['downloadUrl'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = DiskMetadata1.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/ContainerServices>} services
   */
  exports.prototype['services'] = undefined;
  /**
   * @member {String} flavour
   */
  exports.prototype['flavour'] = undefined;
  /**
   * @member {Date} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {String} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {Date} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * @member {Array.<String>} accessRights
   */
  exports.prototype['accessRights'] = undefined;
  /**
   * @member {Boolean} processing
   */
  exports.prototype['processing'] = undefined;
  /**
   * @member {Boolean} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Array.<module:model/Event>} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {Object} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {module:model/Disk.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {String} vm
   */
  exports.prototype['vm'] = undefined;
  /**
   * @member {String} persistent
   */
  exports.prototype['persistent'] = undefined;
  /**
   * @member {String} downloadUrl
   */
  exports.prototype['downloadUrl'] = undefined;
  /**
   * @member {module:model/DiskMetadata1} metadata
   */
  exports.prototype['metadata'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "archive"
     * @const
     */
    "archive": "archive",
    /**
     * value: "volume"
     * @const
     */
    "volume": "volume",
    /**
     * value: "ssd"
     * @const
     */
    "ssd": "ssd",
    /**
     * value: "hissd"
     * @const
     */
    "hissd": "hissd",
    /**
     * value: "ephemeral-hissd"
     * @const
     */
    "ephemeral-hissd": "ephemeral-hissd",
    /**
     * value: "replica"
     * @const
     */
    "replica": "replica"  };


  return exports;
}));


