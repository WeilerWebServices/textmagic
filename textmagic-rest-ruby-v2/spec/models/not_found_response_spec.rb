=begin
#TextMagic API

#No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

OpenAPI spec version: 2

Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for TextMagic::NotFoundResponse
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'NotFoundResponse' do
  before do
    # run before each test
    @instance = TextMagic::NotFoundResponse.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of NotFoundResponse' do
    it 'should create an instance of NotFoundResponse' do
      expect(@instance).to be_instance_of(TextMagic::NotFoundResponse)
    end
  end
  describe 'test attribute "code"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "message"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end