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
    instance = new HyperOneApi.ImageDisks();
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

  describe('ImageDisks', function() {
    it('should create an instance of ImageDisks', function() {
      // uncomment below and update the code to test ImageDisks
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be.a(HyperOneApi.ImageDisks);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "fileSize")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be();
    });

    it('should have the property attachedOn (base name: "attachedOn")', function() {
      // uncomment below and update the code to test the property attachedOn
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be();
    });

    it('should have the property downloadUrl (base name: "downloadUrl")', function() {
      // uncomment below and update the code to test the property downloadUrl
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be();
    });

    it('should have the property disk (base name: "disk")', function() {
      // uncomment below and update the code to test the property disk
      //var instance = new HyperOneApi.ImageDisks();
      //expect(instance).to.be();
    });

  });

}));
