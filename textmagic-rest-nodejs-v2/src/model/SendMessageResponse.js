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
    root.TextmagicClient.SendMessageResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SendMessageResponse model module.
   * @module model/SendMessageResponse
   * @version 2.0.1588
   */

  /**
   * Constructs a new <code>SendMessageResponse</code>.
   * @alias module:model/SendMessageResponse
   * @class
   * @param id {Number} Message ID.
   * @param href {String} URI of the message session.
   * @param type {module:model/SendMessageResponse.TypeEnum} Message response type: * **message** – when the message is sent to a single recipient. * **session** – when the message is sent is to multiple recipients. * **schedule** - when the message is scheduled for sending. * **bulk** - when the message is sent to multiple recipients and the number of recipients requires asynchronous processing See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session). 
   * @param sessionId {Number} Message session ID.
   * @param bulkId {Number} Bulk Session ID. See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session).
   * @param messageId {Number} Message ID.
   * @param scheduleId {Number} Message Schedule ID.
   * @param chatId {Number} Message Chat ID.
   */
  var exports = function(id, href, type, sessionId, bulkId, messageId, scheduleId, chatId) {
    this.id = id;
    this.href = href;
    this.type = type;
    this.sessionId = sessionId;
    this.bulkId = bulkId;
    this.messageId = messageId;
    this.scheduleId = scheduleId;
    this.chatId = chatId;
  };

  /**
   * Constructs a <code>SendMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendMessageResponse} obj Optional instance to populate.
   * @return {module:model/SendMessageResponse} The populated <code>SendMessageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('href'))
        obj.href = ApiClient.convertToType(data['href'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('sessionId'))
        obj.sessionId = ApiClient.convertToType(data['sessionId'], 'Number');
      if (data.hasOwnProperty('bulkId'))
        obj.bulkId = ApiClient.convertToType(data['bulkId'], 'Number');
      if (data.hasOwnProperty('messageId'))
        obj.messageId = ApiClient.convertToType(data['messageId'], 'Number');
      if (data.hasOwnProperty('scheduleId'))
        obj.scheduleId = ApiClient.convertToType(data['scheduleId'], 'Number');
      if (data.hasOwnProperty('chatId'))
        obj.chatId = ApiClient.convertToType(data['chatId'], 'Number');
    }
    return obj;
  }

  /**
   * Message ID.
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * URI of the message session.
   * @member {String} href
   */
  exports.prototype.href = undefined;

  /**
   * Message response type: * **message** – when the message is sent to a single recipient. * **session** – when the message is sent is to multiple recipients. * **schedule** - when the message is scheduled for sending. * **bulk** - when the message is sent to multiple recipients and the number of recipients requires asynchronous processing See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session). 
   * @member {module:model/SendMessageResponse.TypeEnum} type
   */
  exports.prototype.type = undefined;

  /**
   * Message session ID.
   * @member {Number} sessionId
   */
  exports.prototype.sessionId = undefined;

  /**
   * Bulk Session ID. See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session).
   * @member {Number} bulkId
   */
  exports.prototype.bulkId = undefined;

  /**
   * Message ID.
   * @member {Number} messageId
   */
  exports.prototype.messageId = undefined;

  /**
   * Message Schedule ID.
   * @member {Number} scheduleId
   */
  exports.prototype.scheduleId = undefined;

  /**
   * Message Chat ID.
   * @member {Number} chatId
   */
  exports.prototype.chatId = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "message"
     * @const
     */
    message: "message",

    /**
     * value: "session"
     * @const
     */
    session: "session",

    /**
     * value: "schedule"
     * @const
     */
    schedule: "schedule",

    /**
     * value: "bulk"
     * @const
     */
    bulk: "bulk"
  };

  return exports;

}));