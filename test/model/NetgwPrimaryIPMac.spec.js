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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HyperOneApi);
  }
}(this, function(expect, HyperOneApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HyperOneApi.NetgwPrimaryIPMac();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NetgwPrimaryIPMac', function() {
    it('should create an instance of NetgwPrimaryIPMac', function() {
      // uncomment below and update the code to test NetgwPrimaryIPMac
      //var instance = new HyperOneApi.NetgwPrimaryIPMac();
      //expect(instance).to.be.a(HyperOneApi.NetgwPrimaryIPMac);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new HyperOneApi.NetgwPrimaryIPMac();
      //expect(instance).to.be();
    });

    it('should have the property macaddress (base name: "macaddress")', function() {
      // uncomment below and update the code to test the property macaddress
      //var instance = new HyperOneApi.NetgwPrimaryIPMac();
      //expect(instance).to.be();
    });

    it('should have the property vm (base name: "vm")', function() {
      // uncomment below and update the code to test the property vm
      //var instance = new HyperOneApi.NetgwPrimaryIPMac();
      //expect(instance).to.be();
    });

  });

}));