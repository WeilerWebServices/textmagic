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
    root.TextmagicClient.MessagingStatItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MessagingStatItem model module.
   * @module model/MessagingStatItem
   * @version 2.0.1588
   */

  /**
   * Constructs a new <code>MessagingStatItem</code>.
   * @alias module:model/MessagingStatItem
   * @class
   * @param replyRate {Number} The number of incoming messages divided by the number of total messages.
   * @param _date {Date} Time interval start: empty if the **by** parameter was set to **off**. 
   * @param deliveryRate {Number} Message delivery rate:the number of delivered messages divided by the number of total messages.
   * @param costs {Number} Cost for sent messages during this period. The costs are in the [Account](https://docs.textmagic.com/#tag/User) currency. 
   * @param messagesReceived {Number} Total received messages count.
   * @param messagesSentDelivered {Number} Delivered messages count. As messages are retried for up to 48 hours, this value could change.
   * @param messagesSentAccepted {Number} Messages accepted for delivery (in queue) but not yet delivered.
   * @param messagesSentBuffered {Number} Messages buffered by endpoint cell phone operators.
   * @param messagesSentFailed {Number} Messages that have failed for whatever reason, e.g. the destination phone was switched off for 48 hours or the recipient's phone account is out of service.
   * @param messagesSentRejected {Number} Messages that were rejected: invalid Sender ID used (e.g. you cannot use the Sender ID or your own mobile number when sending to the United States and Canada.) 
   * @param messagesSentParts {Number} Total sent messages **parts** count. Note that this is not equal to the sent messages count, because one message could consist of 1 to 6 parts and users are charged per part, not per message.
   */
  var exports = function(replyRate, _date, deliveryRate, costs, messagesReceived, messagesSentDelivered, messagesSentAccepted, messagesSentBuffered, messagesSentFailed, messagesSentRejected, messagesSentParts) {
    this.replyRate = replyRate;
    this._date = _date;
    this.deliveryRate = deliveryRate;
    this.costs = costs;
    this.messagesReceived = messagesReceived;
    this.messagesSentDelivered = messagesSentDelivered;
    this.messagesSentAccepted = messagesSentAccepted;
    this.messagesSentBuffered = messagesSentBuffered;
    this.messagesSentFailed = messagesSentFailed;
    this.messagesSentRejected = messagesSentRejected;
    this.messagesSentParts = messagesSentParts;
  };

  /**
   * Constructs a <code>MessagingStatItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagingStatItem} obj Optional instance to populate.
   * @return {module:model/MessagingStatItem} The populated <code>MessagingStatItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('replyRate'))
        obj.replyRate = ApiClient.convertToType(data['replyRate'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('deliveryRate'))
        obj.deliveryRate = ApiClient.convertToType(data['deliveryRate'], 'Number');
      if (data.hasOwnProperty('costs'))
        obj.costs = ApiClient.convertToType(data['costs'], 'Number');
      if (data.hasOwnProperty('messagesReceived'))
        obj.messagesReceived = ApiClient.convertToType(data['messagesReceived'], 'Number');
      if (data.hasOwnProperty('messagesSentDelivered'))
        obj.messagesSentDelivered = ApiClient.convertToType(data['messagesSentDelivered'], 'Number');
      if (data.hasOwnProperty('messagesSentAccepted'))
        obj.messagesSentAccepted = ApiClient.convertToType(data['messagesSentAccepted'], 'Number');
      if (data.hasOwnProperty('messagesSentBuffered'))
        obj.messagesSentBuffered = ApiClient.convertToType(data['messagesSentBuffered'], 'Number');
      if (data.hasOwnProperty('messagesSentFailed'))
        obj.messagesSentFailed = ApiClient.convertToType(data['messagesSentFailed'], 'Number');
      if (data.hasOwnProperty('messagesSentRejected'))
        obj.messagesSentRejected = ApiClient.convertToType(data['messagesSentRejected'], 'Number');
      if (data.hasOwnProperty('messagesSentParts'))
        obj.messagesSentParts = ApiClient.convertToType(data['messagesSentParts'], 'Number');
    }
    return obj;
  }

  /**
   * The number of incoming messages divided by the number of total messages.
   * @member {Number} replyRate
   */
  exports.prototype.replyRate = undefined;

  /**
   * Time interval start: empty if the **by** parameter was set to **off**. 
   * @member {Date} _date
   */
  exports.prototype._date = undefined;

  /**
   * Message delivery rate:the number of delivered messages divided by the number of total messages.
   * @member {Number} deliveryRate
   */
  exports.prototype.deliveryRate = undefined;

  /**
   * Cost for sent messages during this period. The costs are in the [Account](https://docs.textmagic.com/#tag/User) currency. 
   * @member {Number} costs
   */
  exports.prototype.costs = undefined;

  /**
   * Total received messages count.
   * @member {Number} messagesReceived
   */
  exports.prototype.messagesReceived = undefined;

  /**
   * Delivered messages count. As messages are retried for up to 48 hours, this value could change.
   * @member {Number} messagesSentDelivered
   */
  exports.prototype.messagesSentDelivered = undefined;

  /**
   * Messages accepted for delivery (in queue) but not yet delivered.
   * @member {Number} messagesSentAccepted
   */
  exports.prototype.messagesSentAccepted = undefined;

  /**
   * Messages buffered by endpoint cell phone operators.
   * @member {Number} messagesSentBuffered
   */
  exports.prototype.messagesSentBuffered = undefined;

  /**
   * Messages that have failed for whatever reason, e.g. the destination phone was switched off for 48 hours or the recipient's phone account is out of service.
   * @member {Number} messagesSentFailed
   */
  exports.prototype.messagesSentFailed = undefined;

  /**
   * Messages that were rejected: invalid Sender ID used (e.g. you cannot use the Sender ID or your own mobile number when sending to the United States and Canada.) 
   * @member {Number} messagesSentRejected
   */
  exports.prototype.messagesSentRejected = undefined;

  /**
   * Total sent messages **parts** count. Note that this is not equal to the sent messages count, because one message could consist of 1 to 6 parts and users are charged per part, not per message.
   * @member {Number} messagesSentParts
   */
  exports.prototype.messagesSentParts = undefined;

  return exports;

}));