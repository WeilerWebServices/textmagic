# Net::Sms::TextMagicClient::Object::MessageIn

## Load the model package
```perl
use Net::Sms::TextMagicClient::Object::MessageIn;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the inbound message. | 
**sender** | **string** | The sender’s phone number. | 
**receiver** | **string** | The receiver’s phone number (i.e. your dedicated or shared reply number). | 
**message_time** | **DateTime** | The time when the message reached the TextMagic API endpoint. | 
**text** | **string** | The text from the received message. | 
**contact_id** | **int** | Sender contact ID. | [optional] 
**first_name** | **string** | Sender contact first name. | [optional] 
**last_name** | **string** | Sender contact last name. | [optional] 
**avatar** | **string** |  | 
**email** | **string** | Sender email. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


