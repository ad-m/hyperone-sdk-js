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
        instance = new HyperOneApi.ProjectInvoices();
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

    describe('ProjectInvoices', function() {
        it('should create an instance of ProjectInvoices', function() {
            // uncomment below and update the code to test ProjectInvoices
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be.a(HyperOneApi.ProjectInvoices);
        });

        it('should have the property id (base name: "_id")', function() {
            // uncomment below and update the code to test the property id
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

        it('should have the property invoiceNo (base name: "invoiceNo")', function() {
            // uncomment below and update the code to test the property invoiceNo
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

        it('should have the property issueDate (base name: "issueDate")', function() {
            // uncomment below and update the code to test the property issueDate
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

        it('should have the property summary (base name: "summary")', function() {
            // uncomment below and update the code to test the property summary
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

        it('should have the property project (base name: "project")', function() {
            // uncomment below and update the code to test the property project
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

        it('should have the property organisation (base name: "organisation")', function() {
            // uncomment below and update the code to test the property organisation
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

        it('should have the property duplicate (base name: "duplicate")', function() {
            // uncomment below and update the code to test the property duplicate
            //var instance = new HyperOneApi.ProjectInvoices();
            //expect(instance).to.be();
        });

    });

}));
