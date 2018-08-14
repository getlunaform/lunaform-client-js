/**
 * lunaform
 * This is a RESTful server for managing Terraform plan and apply jobs and the auditing of actions to approve those apply jobs. The inspiration for this project is the AWS CloudFormation API's. The intention is to implement a locking mechanism not only for the terraform state, but for the plan and apply of terraform modules. Once a `module` plan starts, it is instantiated as a `stack` within the nomencalture of `lunaform`. 
 *
 * OpenAPI spec version: 0.0.1-alpha
 * Contact: drew.sonne@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    factory(root.expect, root.Lunaform);
  }
}(this, function(expect, Lunaform) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Lunaform.ResourceTfStack();
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

  describe('ResourceTfStack', function() {
    it('should create an instance of ResourceTfStack', function() {
      // uncomment below and update the code to test ResourceTfStack
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be.a(Lunaform.ResourceTfStack);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property embedded (base name: "_embedded")', function() {
      // uncomment below and update the code to test the property embedded
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property workspaceName (base name: "workspace-name")', function() {
      // uncomment below and update the code to test the property workspaceName
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property moduleId (base name: "module-id")', function() {
      // uncomment below and update the code to test the property moduleId
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property providerConfigurationsIds (base name: "provider-configurations-ids")', function() {
      // uncomment below and update the code to test the property providerConfigurationsIds
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

    it('should have the property variables (base name: "variables")', function() {
      // uncomment below and update the code to test the property variables
      //var instane = new Lunaform.ResourceTfStack();
      //expect(instance).to.be();
    });

  });

}));
