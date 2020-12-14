
# Conversation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** |  | 
**direction** | [**DirectionEnum**](#DirectionEnum) | Message type: inbound or outbound.  | 
**sender** | **String** | Sender phone number. | 
**messageTime** | [**OffsetDateTime**](OffsetDateTime.md) | Time when  the message arrived at TextMagic. | 
**text** | **String** | Message text. | 
**receiver** | **String** | Receiver&#39;s phone number. | 
**status** | **String** | Message status (for chats outbound only). See [message delivery statuses](https://docs.textmagic.com/#section/Delivery-status-codes) for details. | 
**firstName** | **String** | Contact first name. | 
**lastName** | **String** | Contact last name. | 
**sessionId** | **Integer** | Session ID of a message. See [message sessions](https://docs.textmagic.com/#tag/Outbound-Message-Sessions) for details. | 


<a name="DirectionEnum"></a>
## Enum: DirectionEnum
Name | Value
---- | -----
IN | &quot;in&quot;
OUT | &quot;out&quot;
O | &quot;o&quot;
I | &quot;i&quot;



