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
        instance = new HyperOneApi.NetgwVpn();
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

    describe('NetgwVpn', function() {
        it('should create an instance of NetgwVpn', function() {
            // uncomment below and update the code to test NetgwVpn
            //var instance = new HyperOneApi.NetgwVpn();
            //expect(instance).to.be.a(HyperOneApi.NetgwVpn);
        });

        it('should have the property ipsec (base name: "ipsec")', function() {
            // uncomment below and update the code to test the property ipsec
            //var instance = new HyperOneApi.NetgwVpn();
            //expect(instance).to.be();
        });

        it('should have the property l2tp (base name: "l2tp")', function() {
            // uncomment below and update the code to test the property l2tp
            //var instance = new HyperOneApi.NetgwVpn();
            //expect(instance).to.be();
        });

    });

}));
