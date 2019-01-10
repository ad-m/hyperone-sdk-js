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
        instance = new HyperOneApi.IpApi();
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

    describe('IpApi', function() {
        describe('actionIpAllocate', function() {
            it('should call actionIpAllocate successfully', function(done) {
                //uncomment below and update the code to test actionIpAllocate
                //instance.actionIpAllocate(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('actionIpAssociate', function() {
            it('should call actionIpAssociate successfully', function(done) {
                //uncomment below and update the code to test actionIpAssociate
                //instance.actionIpAssociate(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('actionIpDisassociate', function() {
            it('should call actionIpDisassociate successfully', function(done) {
                //uncomment below and update the code to test actionIpDisassociate
                //instance.actionIpDisassociate(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('actionIpRelease', function() {
            it('should call actionIpRelease successfully', function(done) {
                //uncomment below and update the code to test actionIpRelease
                //instance.actionIpRelease(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('actionIpTransfer', function() {
            it('should call actionIpTransfer successfully', function(done) {
                //uncomment below and update the code to test actionIpTransfer
                //instance.actionIpTransfer(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('createIp', function() {
            it('should call createIp successfully', function(done) {
                //uncomment below and update the code to test createIp
                //instance.createIp(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteIp', function() {
            it('should call deleteIp successfully', function(done) {
                //uncomment below and update the code to test deleteIp
                //instance.deleteIp(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('listIp', function() {
            it('should call listIp successfully', function(done) {
                //uncomment below and update the code to test listIp
                //instance.listIp(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('showIp', function() {
            it('should call showIp successfully', function(done) {
                //uncomment below and update the code to test showIp
                //instance.showIp(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateIp', function() {
            it('should call updateIp successfully', function(done) {
                //uncomment below and update the code to test updateIp
                //instance.updateIp(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));
