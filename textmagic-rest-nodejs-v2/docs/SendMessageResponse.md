# TextmagicClient.SendMessageResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Message ID. | 
**href** | **String** | URI of the message session. | 
**type** | **String** | Message response type: * **message** – when the message is sent to a single recipient. * **session** – when the message is sent is to multiple recipients. * **schedule** - when the message is scheduled for sending. * **bulk** - when the message is sent to multiple recipients and the number of recipients requires asynchronous processing See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session).  | 
**sessionId** | **Number** | Message session ID. | 
**bulkId** | **Number** | Bulk Session ID. See [Sending more than 1,000 messages in one session](https://docs.textmagic.com/#section/Tutorials/Sending-more-than-1000-messages-in-one-session). | 
**messageId** | **Number** | Message ID. | 
**scheduleId** | **Number** | Message Schedule ID. | 
**chatId** | **Number** | Message Chat ID. | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `message` (value: `"message"`)

* `session` (value: `"session"`)

* `schedule` (value: `"schedule"`)

* `bulk` (value: `"bulk"`)




