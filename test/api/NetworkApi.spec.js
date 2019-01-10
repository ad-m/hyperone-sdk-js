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

    let instance;

    beforeEach(function() {
        instance = new HyperOneApi.NetworkApi();
    });

    const getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]();
        return object[property];
    };

    const setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value);
        else
            object[property] = value;
    };

    describe('NetworkApi', function() {
        describe('createNetwork', function() {
            it('should call createNetwork successfully', function(done) {
                //uncomment below and update the code to test createNetwork
                //instance.createNetwork(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteNetwork', function() {
            it('should call deleteNetwork successfully', function(done) {
                //uncomment below and update the code to test deleteNetwork
                //instance.deleteNetwork(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('listNetwork', function() {
            it('should call listNetwork successfully', function(done) {
                //uncomment below and update the code to test listNetwork
                //instance.listNetwork(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('showNetwork', function() {
            it('should call showNetwork successfully', function(done) {
                //uncomment below and update the code to test showNetwork
                //instance.showNetwork(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateNetwork', function() {
            it('should call updateNetwork successfully', function(done) {
                //uncomment below and update the code to test updateNetwork
                //instance.updateNetwork(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));
