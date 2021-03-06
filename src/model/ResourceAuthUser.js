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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Lunaform) {
      root.Lunaform = {};
    }
    root.Lunaform.ResourceAuthUser = factory(root.Lunaform.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResourceAuthUser model module.
   * @module model/ResourceAuthUser
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new <code>ResourceAuthUser</code>.
   * @alias module:model/ResourceAuthUser
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ResourceAuthUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceAuthUser} obj Optional instance to populate.
   * @return {module:model/ResourceAuthUser} The populated <code>ResourceAuthUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('shortname')) {
        obj['shortname'] = ApiClient.convertToType(data['shortname'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
      }
      if (data.hasOwnProperty('api-keys')) {
        obj['api-keys'] = ApiClient.convertToType(data['api-keys'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} shortname
   */
  exports.prototype['shortname'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<String>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Array.<String>} api-keys
   */
  exports.prototype['api-keys'] = undefined;



  return exports;
}));


