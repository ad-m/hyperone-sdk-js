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
    define(['ApiClient', 'model/VaultCredential1Password'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VaultCredential1Password'));
  } else {
    // Browser globals (root is window)
    if (!root.HyperOneApi) {
      root.HyperOneApi = {};
    }
    root.HyperOneApi.VaultCredential1 = factory(root.HyperOneApi.ApiClient, root.HyperOneApi.VaultCredential1Password);
  }
}(this, function(ApiClient, VaultCredential1Password) {
  'use strict';



  /**
   * The VaultCredential1 model module.
   * @module model/VaultCredential1
   * @version 1
   */

  /**
   * Constructs a new <code>VaultCredential1</code>.
   * @alias module:model/VaultCredential1
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>VaultCredential1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VaultCredential1} obj Optional instance to populate.
   * @return {module:model/VaultCredential1} The populated <code>VaultCredential1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('password')) {
        obj['password'] = VaultCredential1Password.constructFromObject(data['password']);
      }
      if (data.hasOwnProperty('certificate')) {
        obj['certificate'] = VaultCredential1Password.constructFromObject(data['certificate']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VaultCredential1Password} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {module:model/VaultCredential1Password} certificate
   */
  exports.prototype['certificate'] = undefined;



  return exports;
}));


