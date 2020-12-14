/*
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
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
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.CheckPhoneVerificationCodeTFAInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CheckPhoneVerificationCodeTFAInputObject model module.
   * @module model/CheckPhoneVerificationCodeTFAInputObject
   * @version 2.0.1588
   */

  /**
   * Constructs a new <code>CheckPhoneVerificationCodeTFAInputObject</code>.
   * @alias module:model/CheckPhoneVerificationCodeTFAInputObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CheckPhoneVerificationCodeTFAInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckPhoneVerificationCodeTFAInputObject} obj Optional instance to populate.
   * @return {module:model/CheckPhoneVerificationCodeTFAInputObject} The populated <code>CheckPhoneVerificationCodeTFAInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('verifyId'))
        obj.verifyId = ApiClient.convertToType(data['verifyId'], 'String');
    }
    return obj;
  }

  /**
   * Verification code received by the user and entered into the form field.
   * @member {Number} code
   */
  exports.prototype.code = undefined;

  /**
   * VerifyId from Step 1 to match both requests together.
   * @member {String} verifyId
   */
  exports.prototype.verifyId = undefined;

  return exports;

}));
