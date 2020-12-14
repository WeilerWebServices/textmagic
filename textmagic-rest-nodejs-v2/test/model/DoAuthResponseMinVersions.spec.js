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
    describe('DoAuthResponseMinVersions', function() {
      beforeEach(function() {
        instance = new TextmagicClient.DoAuthResponseMinVersions();
      });

      it('should create an instance of DoAuthResponseMinVersions', function() {
        // TODO: update the code to test DoAuthResponseMinVersions
        expect(instance).to.be.a(TextmagicClient.DoAuthResponseMinVersions);
      });

      it('should have the property ios (base name: "ios")', function() {
        // TODO: update the code to test the property ios
        expect(instance).to.have.property('ios');
        // expect(instance.ios).to.be(expectedValueLiteral);
      });

      it('should have the property android (base name: "android")', function() {
        // TODO: update the code to test the property android
        expect(instance).to.have.property('android');
        // expect(instance.android).to.be(expectedValueLiteral);
      });

      it('should have the property desktop (base name: "desktop")', function() {
        // TODO: update the code to test the property desktop
        expect(instance).to.have.property('desktop');
        // expect(instance.desktop).to.be(expectedValueLiteral);
      });

    });
  });

}));