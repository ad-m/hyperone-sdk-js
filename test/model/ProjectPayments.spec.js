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
        instance = new HyperOneApi.ProjectPayments();
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

    describe('ProjectPayments', function() {
        it('should create an instance of ProjectPayments', function() {
            // uncomment below and update the code to test ProjectPayments
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be.a(HyperOneApi.ProjectPayments);
        });

        it('should have the property id (base name: "_id")', function() {
            // uncomment below and update the code to test the property id
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property name (base name: "name")', function() {
            // uncomment below and update the code to test the property name
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property services (base name: "services")', function() {
            // uncomment below and update the code to test the property services
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property flavour (base name: "flavour")', function() {
            // uncomment below and update the code to test the property flavour
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property modifiedOn (base name: "modifiedOn")', function() {
            // uncomment below and update the code to test the property modifiedOn
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property modifiedBy (base name: "modifiedBy")', function() {
            // uncomment below and update the code to test the property modifiedBy
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property createdBy (base name: "createdBy")', function() {
            // uncomment below and update the code to test the property createdBy
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property createdOn (base name: "createdOn")', function() {
            // uncomment below and update the code to test the property createdOn
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property accessRights (base name: "accessRights")', function() {
            // uncomment below and update the code to test the property accessRights
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property processing (base name: "processing")', function() {
            // uncomment below and update the code to test the property processing
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property created (base name: "created")', function() {
            // uncomment below and update the code to test the property created
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property queue (base name: "queue")', function() {
            // uncomment below and update the code to test the property queue
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property state (base name: "state")', function() {
            // uncomment below and update the code to test the property state
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property tag (base name: "tag")', function() {
            // uncomment below and update the code to test the property tag
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property project (base name: "project")', function() {
            // uncomment below and update the code to test the property project
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property creditsFree (base name: "creditsFree")', function() {
            // uncomment below and update the code to test the property creditsFree
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property credits (base name: "credits")', function() {
            // uncomment below and update the code to test the property credits
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property channel (base name: "channel")', function() {
            // uncomment below and update the code to test the property channel
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property amount (base name: "amount")', function() {
            // uncomment below and update the code to test the property amount
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

        it('should have the property type (base name: "type")', function() {
            // uncomment below and update the code to test the property type
            //var instance = new HyperOneApi.ProjectPayments();
            //expect(instance).to.be();
        });

    });

}));
