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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResourceTfProvider', 'model/ResourceTfProviderConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceTfProvider'), require('./ResourceTfProviderConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.Lunaform) {
      root.Lunaform = {};
    }
    root.Lunaform.ResourceListTfProviderConfiguration = factory(root.Lunaform.ApiClient, root.Lunaform.ResourceTfProvider, root.Lunaform.ResourceTfProviderConfiguration);
  }
}(this, function(ApiClient, ResourceTfProvider, ResourceTfProviderConfiguration) {
  'use strict';




  /**
   * The ResourceListTfProviderConfiguration model module.
   * @module model/ResourceListTfProviderConfiguration
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new <code>ResourceListTfProviderConfiguration</code>.
   * @alias module:model/ResourceListTfProviderConfiguration
   * @class
   * @param providerConfigurations {Array.<module:model/ResourceTfProviderConfiguration>} 
   */
  var exports = function(providerConfigurations) {
    var _this = this;

    _this['provider-configurations'] = providerConfigurations;

  };

  /**
   * Constructs a <code>ResourceListTfProviderConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceListTfProviderConfiguration} obj Optional instance to populate.
   * @return {module:model/ResourceListTfProviderConfiguration} The populated <code>ResourceListTfProviderConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('provider-configurations')) {
        obj['provider-configurations'] = ApiClient.convertToType(data['provider-configurations'], [ResourceTfProviderConfiguration]);
      }
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ResourceTfProvider.constructFromObject(data['provider']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ResourceTfProviderConfiguration>} provider-configurations
   */
  exports.prototype['provider-configurations'] = undefined;
  /**
   * @member {module:model/ResourceTfProvider} provider
   */
  exports.prototype['provider'] = undefined;



  return exports;
}));


