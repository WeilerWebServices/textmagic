
# SendMessageResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Message ID. | 
**href** | **String** | URI of the message session. | 
**type** | [**TypeEnum**](#TypeEnum) | Message response type: * **message** – when the message is sent to a single recipient. * **session** – when the message is sent is to multiple recipients. * **schedule** - when the message is scheduled for sending. * **bulk** - when the message is sent to multiple recipients and the number of recipients requires asynchronous processing See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session).  | 
**sessionId** | **Integer** | Message session ID. | 
**bulkId** | **Integer** | Bulk Session ID. See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session). | 
**messageId** | **Integer** | Message ID. | 
**scheduleId** | **Integer** | Message Schedule ID. | 
**chatId** | **Integer** | Message Chat ID. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
MESSAGE | &quot;message&quot;
SESSION | &quot;session&quot;
SCHEDULE | &quot;schedule&quot;
BULK | &quot;bulk&quot;



