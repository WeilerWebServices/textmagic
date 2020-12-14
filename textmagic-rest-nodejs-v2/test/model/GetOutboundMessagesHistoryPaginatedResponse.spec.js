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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TextmagicClient);
  }
}(this, function(expect, TextmagicClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetOutboundMessagesHistoryPaginatedResponse', function() {
      beforeEach(function() {
        instance = new TextmagicClient.GetOutboundMessagesHistoryPaginatedResponse();
      });

      it('should create an instance of GetOutboundMessagesHistoryPaginatedResponse', function() {
        // TODO: update the code to test GetOutboundMessagesHistoryPaginatedResponse
        expect(instance).to.be.a(TextmagicClient.GetOutboundMessagesHistoryPaginatedResponse);
      });

      it('should have the property lastId (base name: "lastId")', function() {
        // TODO: update the code to test the property lastId
        expect(instance).to.have.property('lastId');
        // expect(instance.lastId).to.be(expectedValueLiteral);
      });

      it('should have the property nextLastId (base name: "nextLastId")', function() {
        // TODO: update the code to test the property nextLastId
        expect(instance).to.have.property('nextLastId');
        // expect(instance.nextLastId).to.be(expectedValueLiteral);
      });

      it('should have the property limit (base name: "limit")', function() {
        // TODO: update the code to test the property limit
        expect(instance).to.have.property('limit');
        // expect(instance.limit).to.be(expectedValueLiteral);
      });

      it('should have the property resources (base name: "resources")', function() {
        // TODO: update the code to test the property resources
        expect(instance).to.have.property('resources');
        // expect(instance.resources).to.be(expectedValueLiteral);
      });

    });
  });

}));