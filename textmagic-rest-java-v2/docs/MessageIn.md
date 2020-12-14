
# MessageIn

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | The ID of the inbound message. | 
**sender** | **String** | The sender’s phone number. | 
**receiver** | **String** | The receiver’s phone number (i.e. your dedicated or shared reply number). | 
**messageTime** | [**OffsetDateTime**](OffsetDateTime.md) | The time when the message reached the TextMagic API endpoint. | 
**text** | **String** | The text from the received message. | 
**contactId** | **Integer** | Sender contact ID. |  [optional]
**firstName** | **String** | Sender contact first name. |  [optional]
**lastName** | **String** | Sender contact last name. |  [optional]
**avatar** | **String** |  | 
**email** | **String** | Sender email. |  [optional]



