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
        instance = new HyperOneApi.NetgwApi();
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

    describe('NetgwApi', function() {
        describe('actionNetgwAttach', function() {
            it('should call actionNetgwAttach successfully', function(done) {
                //uncomment below and update the code to test actionNetgwAttach
                //instance.actionNetgwAttach(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('actionNetgwDetach', function() {
            it('should call actionNetgwDetach successfully', function(done) {
                //uncomment below and update the code to test actionNetgwDetach
                //instance.actionNetgwDetach(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('createNetgw', function() {
            it('should call createNetgw successfully', function(done) {
                //uncomment below and update the code to test createNetgw
                //instance.createNetgw(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteNetgw', function() {
            it('should call deleteNetgw successfully', function(done) {
                //uncomment below and update the code to test deleteNetgw
                //instance.deleteNetgw(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('listNetgw', function() {
            it('should call listNetgw successfully', function(done) {
                //uncomment below and update the code to test listNetgw
                //instance.listNetgw(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('showNetgw', function() {
            it('should call showNetgw successfully', function(done) {
                //uncomment below and update the code to test showNetgw
                //instance.showNetgw(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateNetgw', function() {
            it('should call updateNetgw successfully', function(done) {
                //uncomment below and update the code to test updateNetgw
                //instance.updateNetgw(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));
