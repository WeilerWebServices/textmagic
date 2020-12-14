
# Chat

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Chat ID. | 
**originalId** | **Integer** |  | 
**phone** | **String** | Chat partner&#39;s phone number. | 
**contact** | [**Contact**](Contact.md) |  | 
**unsubscribedContactId** | **Integer** | If this field has a value, it means that the chat phone number has been unsubscribed from you and this value is an ID of an Unsubscribed contact entity. See [Get all unsubscribed contacts](https://docs.textmagic.com/#operation/getUnsubscribers). | 
**unread** | **Integer** | Total unread incoming messages. | 
**updatedAt** | [**OffsetDateTime**](OffsetDateTime.md) | Time when the last incoming message arrived at this chat. | 
**status** | [**StatusEnum**](#StatusEnum) | Chat status:   * **a** - Active;   * **c** - Closed;   * **d** - Deleted.  | 
**mute** | **Integer** | Indicates when the chat is muted. | 
**lastMessage** | **String** | The last message content of a chat. | 
**direction** | [**DirectionEnum**](#DirectionEnum) | Last message type: * **ci** - incoming call; * **co** - outgoing call; * **i** - incoming message; * **o** - outgoing message.  | 
**from** | **String** | If filled, the value will be used as a sender number for all outgoing messages of a chat. | 
**mutedUntil** | [**OffsetDateTime**](OffsetDateTime.md) | Date and time until the chat will be muted. | 
**timeLeftMute** | **Integer** | Time left untill the chat will be unmuted (seconds). | 
**country** | [**Country**](Country.md) |  | 
**pinned** | **Boolean** | Indicates when the chat is pinned. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
A | &quot;a&quot;
C | &quot;c&quot;
D | &quot;d&quot;


<a name="DirectionEnum"></a>
## Enum: DirectionEnum
Name | Value
---- | -----
CI | &quot;ci&quot;
CO | &quot;co&quot;
I | &quot;i&quot;
O | &quot;o&quot;



