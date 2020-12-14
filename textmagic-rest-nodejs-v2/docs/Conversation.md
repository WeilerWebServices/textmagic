# TextmagicClient.Conversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | 
**direction** | **String** | Message type: inbound or outbound.  | 
**sender** | **String** | Sender phone number. | 
**messageTime** | **Date** | Time when  the message arrived at TextMagic. | 
**text** | **String** | Message text. | 
**receiver** | **String** | Receiver's phone number. | 
**status** | **String** | Message status (for chats outbound only). See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details. | 
**firstName** | **String** | Contact first name. | 
**lastName** | **String** | Contact last name. | 
**sessionId** | **Number** | Session ID of a message. See [message sessions](https://docs.textmagic.com/#tag/Outbound-Message-Sessions) for details. | 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `_in` (value: `"in"`)

* `out` (value: `"out"`)

* `o` (value: `"o"`)

* `i` (value: `"i"`)




